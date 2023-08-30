const express = require('express')
const morgan = require('morgan')
require('dotenv').config();
const DataRouter = require('./Router/router') 
const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use('/data', DataRouter);

const port = process.env.PORT || 3000;
app.listen(port , '127.0.0.1', ()=>{
    console.log("Server has Started");
})