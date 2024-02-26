import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {hash,compare} from 'bcrypt';
import {getproducts,getproduct,addproduct,deleteproduct,updateproduct} from './models/database.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
   config()

   const app = express()
app.use(cors({
    origin: '  http://localhost:8985:',
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
// app.post('/login',(req,res)=>{
//     const{username}=req.body
//     const token = jwt.sign({username:username},
//         process.env.SECERT_KEY,{expiresIN:'1h'})
//         res.cookie('jwt',token)
//         res.json({
//             msg:"You have logged in"
//         })
//     })
 const authenticate = (req, res)=>{
            let {cookie} = req.headers
           let tokenInHeader = cookie.split('=')[1]
           if (token===null)res.send(401)
           jwt.verify(tokenInHeader,process.env.SECRET_key,
            (err,user)=>{
                if(err,user) return res.sendStatus(403 )
                req.user = user
            }
            )
  
        }
const middleware = (req, res,next)=>{
            console.log('Searching for products');
            req.body.response === "ok"? next(): res.send('Please type correctly')
        }
// get all products
app.get('/products',middleware,async(req, res)=>{
    res.send(await getproducts())
})

app.get('/products/:iditems',async(req, res)=>{
    res.send(await getproducts(+req.params.iditems))
})

  //  delete a product
app.delete('/products/:iditems',async(req, res)=>{
   res.send(await deleteproduct(req.params.iditems))
})

// Edit a product
app.patch('/products/:iditems',async(req, res)=>{
    let {prodName,amount} = req.body
    const [product]= await getproduct(+req.params.iditems)
    prodName ? amount=amount: {amount}=product
    console.log(product);
    await updateproduct(prodName,amount,+req.params.iditems)
    res.json(await getproducts())
})

app.post('/products',async(req, res)=>{
    const {iditems,prodName,quantity,amount,Category,prodUrl} = req.body
    res.send(await addproduct(iditems,prodName,quantity,amount,Category, prodUrl))
    })
          
app.use(express.static("Views"))
// app.use('/products','indexRouter')

app.patch('/products/:iditems',async(req,res)=>{
    let{prodName,amount} = req.body
    const [product] = await getproduct(+req.params.iditems)
  // turnary functions
  prodName ? prodName=prodName : {prodName}=product
   amount? amount = amount: {amount}=product
    console.log(product);
    await updateproduct(prodName,amount,+req.params.iditems)
    res.json(await getproducts())
})





app.listen(process.env.PORT, function(){
    console.log('listening on port http://localhost:'+process.env.PORT)
})