"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "UserName is Required"],
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    }
}, { timestamps: true });
const User = mongoose_1.default.model('Users', UserSchema);
exports.default = User;
