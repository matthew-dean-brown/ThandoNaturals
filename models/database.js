import {pool} from '../Config/config.js';
// import { config } from 'dotenv';

// config();

//  Clever Cloud MySQL 
// const {
//     MYSQL_ADDON_HOST,
//     MYSQL_ADDON_PORT,
//     MYSQL_ADDON_DB,
//     MYSQL_ADDON_USER,
//     MYSQL_ADDON_PASSWORD
// } = process.env;

//  connection pool 

// Items logic

const getproducts = async () => {
    const [result] = await pool.query(`SELECT * FROM products`);
    return result;
};

const getproduct = async (prodID) => {
    const [result] = await pool.query(`SELECT * FROM products WHERE prodID = ?`, [prodID]);
    return result;
};

const addproduct = async (prodID, prodName, quantity, amount, Category, prodUrl) => {
    await pool.query(
        "INSERT INTO products (prodID, prodName, quantity, amount, Category, prodUrl) VALUES (?,?,?,?,?,?)",
        [prodID, prodName, quantity, amount, Category, prodUrl]
    );
    return getproducts();
};

const deleteproduct = async (prodID) => {
    await pool.query(`DELETE FROM products WHERE prodID = ?`, [prodID]);
    return getproducts();
};

const updateproduct = async (prodName, prodUrl, quantity, amount, category, prodID) => {
    await pool.query(`
        UPDATE products
        SET prodName=?, prodUrl=?, quantity=?, amount=?, category=?
        WHERE prodID=?
    `, [prodName, prodUrl, quantity, amount, category,prodID]);
    return getproducts();
};

// Users logic





// users logic

const adduser = async (idusers, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) => {
    const [result] = await pool.query(
        "INSERT INTO users (idusers, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) VALUES (?,?,?,?,?,?,?,?,?)",
        [idusers, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile]
    );
    return result;
};


const getusers = async () => {
    const [result] = await pool.query(`SELECT * FROM users`);
    return result;
};

const getuser = async (idusers) => {
    const [result] = await pool.query(`SELECT * FROM users WHERE idusers = ?`, [idusers]);
    return result;
};

const deleteuser = async (idusers) => {
    await pool.query(`DELETE FROM users WHERE idusers = ?`, [idusers]);
    return getusers();
};

const updateuser = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, idusers) => {
    await pool.query(`
        UPDATE users 
        SET firstName=?, lastName=?, userAge=?, Gender=?, userRole=?, emailAdd=?, userPass=?, userProfile=?
        WHERE idusers=?
    `, [firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, idusers]);
    return getusers();
};

 
const checkuser = async (Username) => {
    const [[{ Password }]] = await pool.query(`SELECT Password FROM users WHERE Username = ?`, [Username]);
    return Password;
};

export {
    getproducts,
    getproduct,
    addproduct,
    deleteproduct,
    updateproduct,
    adduser,
    checkuser,
    getusers,
    getuser,
    deleteuser,
    updateuser,
};
