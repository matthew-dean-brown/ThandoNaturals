import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { getproducts, getproduct, addproduct, deleteproduct, updateproduct,adduser,checkuser, getusers, getuser, deleteuser,updateuser } from './models/database.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

config();

const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
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
    res.send(await deleteproduct(req.params.prodID));
});

// Update a product

app.patch('/products/:prodID', async (req, res) => {
    try {
        const { prodName, prodUrl, quantity, amount, category } = req.body;
        await updateproduct(prodName, prodUrl, quantity, amount, category, +req.params.prodID);
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
    try {
        const { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;
        await updateuser(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, +req.params.idusers);
        res.json(await getuser(+req.params.idusers));
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});



// Delete a user
app.delete('/users/:idusers', async (req, res) => {
    res.send(await deleteuser(req.params.idusers));
});

// Add a user
app.post('/users', async (req, res) => {
    const { idusers, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;

    const validFields = idusers && firstName && lastName && userAge && Gender && userRole && emailAdd && userPass && userProfile;

    validFields
        ? (await adduser(idusers, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile),
          res.json({ msg: 'User added successfully!' }))
        : res.status(400).json({ msg: 'Please provide all required fields.' });
});


const authorise = async (req,res,next)=>{
    let { emailAdd, userPass, }=req.body
    let hashedPwd = await checkuser(Username)
     compare(userPass,emailAdd,hashedPwd, (err,result)=>{
    if(result==true){
        next()
    }else {
        res.send ({msg:'The email or password is incorrect'})
    }
})
}

   

  
app.post('/login', authorise, (req, res)=>{
    res.send({
        msg:"You have successfully logged in!!! Yay!!"
    })
})


// Server listening
app.listen(process.env.PORT, function () {
    console.log('listening on port http://localhost:' + process.env.PORT);
});
