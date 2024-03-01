import {
  getproducts,
  getproduct,
  addproduct,
  deleteproduct,
  updateproduct,
} from '../models/database.js';

// Get all products
 const getProducts = async (req, res) => {
  res.send(await getproducts());
};

// Get product by ID
const getProduct = async (req, res) => {
  res.send(await getproduct(+req.params.prodID));
};

// Add a product
const addProduct = async (req, res) => {
  const { prodID, prodName, quantity, amount, category, prodUrl } = req.body;
  res.send(await addproduct(prodID, prodName, quantity, amount, category, prodUrl));
};

// Delete a product
 const deleteProduct = async (req, res) => {
  res.send(await deleteproduct(req.params.prodID));
};

// Update a product
let updateProduct = async (req, res) => {
  try {
    const { prodName, prodUrl, quantity, amount, category } = req.body;
    await updateproduct(prodName, prodUrl, quantity, amount, category, +req.params.prodID);
    res.json(await getproducts());
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
export{getProducts,getProduct,addProduct,deleteProduct,updateProduct,}
