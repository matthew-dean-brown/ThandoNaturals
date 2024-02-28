import mysql from 'mysql2';
import { config } from 'dotenv';

config();

// Extract Clever Cloud MySQL credentials from the environment variables
const {
    MYSQL_ADDON_HOST,
    MYSQL_ADDON_PORT,
    MYSQL_ADDON_DB,
    MYSQL_ADDON_USER,
    MYSQL_ADDON_PASSWORD
} = process.env;

// Create a connection pool
const pool = mysql.createPool({
    host: MYSQL_ADDON_HOST,
    port: MYSQL_ADDON_PORT,
    user: MYSQL_ADDON_USER,
    password: MYSQL_ADDON_PASSWORD,
    database: MYSQL_ADDON_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();
// Items logic

const getproducts = async () => {
    const [result] = await pool.query(`SELECT * FROM items`);
    return result;
};

const getproduct = async (iditems) => {
    const [result] = await pool.query(`SELECT * FROM items WHERE iditems = ?`, [iditems]);
    return result;
};

const addproduct = async (iditems, prodName, quantity, amount, Category, prodUrl) => {
    await pool.query(
        "INSERT INTO items (iditems, prodName, quantity, amount, Category, prodUrl) VALUES (?,?,?,?,?,?)",
        [iditems, prodName, quantity, amount, Category, prodUrl]
    );
    return getproducts();
};

const deleteproduct = async (iditems) => {
    await pool.query(`DELETE FROM items WHERE iditems = ?`, [iditems]);
    return getproducts();
};

const updateproduct = async (prodName, prodUrl, quantity, amount, Category, iditems) => {
    await pool.query(`
        UPDATE items 
        SET prodName=?, prodUrl=?, quantity=?, amount=?, Category=?
        WHERE iditems=?
    `, [prodName, prodUrl, quantity, amount, Category, iditems]);
    return getproducts();
};

// Users logic

const adduser = async (Username, Password) => {
    await pool.query(`
        INSERT INTO users (Username, Password) 
        VALUES (?,?);
    `, [Username, Password]);
};

const checkuser = async (firstName) => {
    const [[{ Password }]] = await pool.query(`SELECT Password FROM users WHERE firstName = ?`, [firstName]);
    return Password;
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

const updateuser = async (firstName, lasttName, userAge, Gender, userRole, emailAdd, userPass, userProfile, idusers) => {
    await pool.query(`
        UPDATE users 
        SET firstName=?, lasttName=?, userAge=?, Gender=?, userRole=?, emailAdd=?, userPass=?, userProfile=?
        WHERE idusers=?
    `, [firstName, lasttName, userAge, Gender, userRole, emailAdd, userPass, userProfile, idusers]);
    return getusers();
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
