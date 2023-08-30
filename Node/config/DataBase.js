require('dotenv').config();
const sql = require("mysql2")

const sqlPool = sql.createPool({
    host: process.env.HOST, 
    user: process.env.USER, 
    database: process.env.DATABASE, 
    password: process.env.PASSWORD, 
})
module.exports = sqlPool.promise(); 