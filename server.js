import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {hash,compare} from 'bcrypt';
import {getproducts,getproduct,addproduct,deleteproduct,updateproduct,updateuser,deleteuser,updateuser} from './models/database.js';
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
    let {prodName,quantity,amount,Category,prodUrl,} = req.body
    const [product]= await getproduct(+req.params.iditems)
    prodName ? prodName=prodName: {prodName}=product
    quantity ?quantity=quantity: {quantity}=product
   amount ? amount=amount: {amount}=product
   Category ? Category=Category: {Category}=product
   prodUrl ? prodUrl=prodUrl: {prodUrl}=product
    console.log(product);
    await updateproduct(prodName,quantity,amount,Category,prodUrl+req.params.iditems)
    res.json(await getproducts())
})

app.post('/products',async(req, res)=>{
    const {iditems,prodName,quantity,amount,Category,prodUrl} = req.body
    res.send(await addproduct(iditems,prodName,quantity,amount,Category, prodUrl))
    })
          
app.use(express.static("Views"))
// app.use('/products','indexRouter')


// app.get('/products',middleware,async(req, res)=>{
//     res.send(await getproducts())
// })

app.get('/products/:idusers',async(req, res)=>{
    res.send(await getusers(+req.params.idusers))
})

  //  delete a user
app.delete('/products/:idusers',async(req, res)=>{
   res.send(await deleteuser(req.params.idusers))
})

// Edit a user 
app.patch('/products/:idusers',async(req, res)=>{
    let {firstName,lasttName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
    const [product]= await getuser(+req.params.idusers)
    firstName ? firstName=firstName: {firstName}=product
    lasttName ?lasttName=lasttName: {lasttName}=product
   userAge? userAge=userAge: {userAge}=product
   Gender ? Gender=Gender: {Gender}=product
   userRole ? userRole= userRole: { userRole}=product
   emailAdd ? emailAdd= emailAdd: {emailAdd}=product
   userPass ? userPass= userPass: {userPass}=product
   userProfile ? userProfile= userProfile: {userProfile}=product
    console.log(product);
    await updateuser(firstName,lasttName,userAge,Gender,userRole,emailAdd,userPass,userProfile+req.params.idusers)
    res.json(await getusers())
})

app.post('/products',async(req, res)=>{
    const {idusers,firstName,lasttName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
    res.send(await adduser(idusers,firstName,lasttName,userAge,Gender,userRole,emailAdd,userPass,userProfile))
    })
          
app.use(express.static("Views"))
// app.use('/products','indexRouter')


// Create User




app.listen(process.env.PORT, function(){
    console.log('listening on port http://localhost:'+process.env.PORT)
})