import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { getproducts, getproduct, addproduct, deleteproduct, updateproduct, adduser, checkuser, getusers, getuser, deleteuser } from './models/database.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

config();

const app = express();

app.use(cors({
    origin: 'http://localhost:8985',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Authentication middleware
const authenticate = (req, res) => {
    let { cookie } = req.headers;
    let tokenInHeader = cookie.split('=')[1];
    if (tokenInHeader === null) res.send(401);
    jwt.verify(tokenInHeader, process.env.SECRET_key, (err, user) => {
        if (err || !user) return res.sendStatus(403);
        req.user = user;
    });
};

// middleware
// const middleware = (req, res, next) => {
//     console.log('getting products');
//     req.body.response === 'ok' ? next() : res.send('Please type correct response');
// };

// Get all products
app.get('/products',async (req, res) => {
  res.send(await getproducts());
});  

// Get product by ID
app.get('/products/:prodID', async (req, res) => {
    res.send(await getproduct(+req.params.prodID));
});



// Delete a product
app.delete('/products/:prodID', async (req, res) => {
    res.send(await deleteproduct(req.params.iditems));
});

// Update a product

app.patch('/products/:prodID', async (req, res) => {
    try {
        const { prodName, prodUrl, quantity, amount, Category } = req.body;
        await updateproduct(prodName, prodUrl, quantity, amount, Category, +req.params.prodID);
        res.json(await getproducts());
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});



// Add a product
app.post('/products', async (req, res) => {
    const { prodID, prodName, quantity, amount, category, prodUrl } = req.body;
    res.send(await addproduct(prodID, prodName, quantity, amount, category, prodUrl));
});

// Serve static files
app.use(express.static('Views'));

// ... (User routes)

app.get('/users', async (req, res) => {
    res.send(await getusers());
});

app.get('/users/:idusers', async (req, res) => {
    res.send(await getuser(+req.params.idusers));
});

// Update a user
app.patch('/users/:idusers', async (req, res) => {
    const { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;
    const [user] = await getuser(+req.params.idusers);
    const updatedFirstName = firstName || user.firstName;
    const updatedLastName = lastName || user.lastName;
    const updatedUserAge = userAge || user.userAge;
    const updatedGender = Gender || user.Gender;
    const updatedUserRole = userRole || user.userRole;
    const updatedEmailAdd = emailAdd || user.emailAdd;
    const updatedUserPass = userPass || user.userPass;
    const updatedUserProfile = userProfile || user.userProfile;

    await updateuser(updatedFirstName, updatedLastName, updatedUserAge, updatedGender, updatedUserRole, updatedEmailAdd, updatedUserPass, updatedUserProfile + req.params.idusers);
    res.json(await getusers());
});

// Delete a user
app.delete('/users/:idusers', async (req, res) => {
    res.send(await deleteuser(req.params.idusers));
});

// Add a user
app.post('/users', async (req, res) => {
    let { idusers, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;
    res.send(await adduser(idusers, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile));
});



// Server listening
app.listen(process.env.PORT, function () {
    console.log('listening on port http://localhost:' + process.env.PORT);
});