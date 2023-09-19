// import { config as configDotenv } from 'dotenv';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {app} from "../index";
dotenv.config();

// Connect to MongoDB
let connectionstring = process.env.CONNECTION_STRING || '';
mongoose.connect(connectionstring).then(connectionobj=>{
    const PORT = process.env.PORT_NUMBER || 3000;
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT_NUMBER}`);
        console.log("Mongoose is connected successfully")
    })

}).catch(err=>console.log(err.message));