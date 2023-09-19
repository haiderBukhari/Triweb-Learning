import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
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
        type:String,
        required: [true, "Password is Required"]
    }
}, {timestamps: true})

const User = mongoose.model('Users', UserSchema);
export default User;