import mysql from 'mysql2' ;
import {config} from 'dotenv'
config()
const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE
}).promise()
async function getproducts(){
    const [result] = await pool.query(
        `select *
        FROM items
        `
    )  
    return result
}
async function getproduct(iditems){
    const [result] = await pool.query(`
    SELECT *
    FROM items
    WHERE iditems = ?
    ` ,[iditems])
    return result
}
async function addproduct(iditems,prodName,quantity,amount,Category,prodUrl){
    const [product] = await pool.query(
        "INSERT INTO items (iditems,prodName,quantity,amount,Category,prodUrl) VALUES (?,?,?,?,?,?)",
        [iditems,prodName,quantity,amount,Category,prodUrl], 
    )
    return getproducts()
}

const deleteproduct = async(iditems)=>{
    const [product] = await pool.query(`
    DELETE FROM items where iditems =?
    `,[iditems])
    return getproducts()
}
const updateproduct = async (prodName,prodUrl,quantity,amount,Category,iditems)=>{
    const [product] = await pool.query(`
    UPDATE items set ProdName= ?, amount=?
    WHERE (iditems=?)
    `,[prodName,prodUrl,quantity,amount,Category,iditems])
    return getproduct(product.insertiditems)
}

const adduser = async(Username,Password)=>{
    const user = await pool.query(` 
    INSERT INTO users (Username,Password) 
    VALUES (?,?);
    `, [Username,Password]
    
    )
}
const checkuser = async(Username)=>{ 
    const [[{Password}]]= await pool.query(`
    SELECT Password FROM users WHERE Username = ?
    `,[Username])
    return Password
}



export{getproducts,getproduct,addproduct,deleteproduct,updateproduct,adduser,checkuser}
// for users table

