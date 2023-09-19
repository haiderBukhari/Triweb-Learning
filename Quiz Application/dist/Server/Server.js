"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { config as configDotenv } from 'dotenv';
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("../index");
dotenv_1.default.config();
// Connect to MongoDB
let connectionstring = process.env.CONNECTION_STRING || '';
mongoose_1.default.connect(connectionstring).then(connectionobj => {
    const PORT = process.env.PORT_NUMBER || 3000;
    index_1.app.listen(PORT, () => {
        console.log(`Server is running on port ${process.env.PORT_NUMBER} haha`);
        console.log("Mongoose is connected successfully");
    });
}).catch(err => console.log(err.message));
