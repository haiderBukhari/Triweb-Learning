import { Request, Response} from "express"
import User from "../Model/UserModel"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator"
dotenv.config();

const postuserdata = async (req:Request, res:Response) => {
    try{
        const validationr = validationResult(req);
        if(!validationr.isEmpty()){
            return res.status(422).json({
                status: "failed",
                message: validationr.array()
            })
        }
        const password = await bcrypt.hash(req.body.password, 12);
        const request = {...req.body, password}
        const user = await User.create(request);
        res.status(200).json({
            status: "success",
            'message': 'User Created Successfully',
            data: [
                user
            ]
        })
    }
    catch(err:any){
        res.status(400).json({
            status: "failed",
            message: err
        })
    }
}

const loginUser = async (req:Request, res:Response) =>{
    try{
        const userdata = await User.findOne({email: req.body.email});
        if(!userdata){
            throw new Error("User Not Found")
        }
        if(req.body.password.length <= 0){
            throw new Error("Password is manadatory")
        }
        const isFound = bcrypt.compareSync(req.body.password, userdata.password)
        if(!isFound){
            throw new Error("Password is Incorrect")
        } 
        const token = jwt.sign({userid: userdata._id}, process.env.JWT_SECRET_KEY || '', {expiresIn: '1h'});
        res.status(200).json({
            status: "success",
            "message": "Login Successfully",
            data: [
                userdata, {"JWT AUTH Token": token}
            ]
        })
    }
    catch(err:any){
        res.status(400).json({
            status: "failed",
            message: err.message
        })
    }
}

// export {postuserdata, loginUser}
export {postuserdata, loginUser};