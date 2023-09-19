import { Request, Response} from "express"
import User from "../Model/UserModel"
import bcrypt from "bcryptjs"

const getuserdata = async (req:Request, res:Response) => {
    try{
        const user = await User.find({}, {__v: false});
        res.status(200).json({
            status: "success",
            data: [
                user
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
const getsingleuserdata = async (req:Request, res:Response) => {
    try{
        if(!(req.userid == req.params.id)){
            return res.status(400).json({
                status: "failed",
                message: "User ID or JWT token is not Valid please Login to check the token or Register for a new User"
            })
        }
        const user = await User.find({_id: req.params.id}, {__v: false});
        res.status(200).json({
            status: "success",
            data: [
                user
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
const updateuserdata = async (req:Request, res:Response) => {
    try{
        if(!(req.userid == req.params.id)){
            return res.status(400).json({
                status: "failed",
                message: "User ID or JWT token is not Valid please Login to check the token or Register for a new User"
            })
        }
        let request = req.body
        if(req.body.password){
            const userreq = await bcrypt.hash(req.body.password, 12);
            request = {...req.body, password:userreq}
        }
        const userdata = await User.findByIdAndUpdate(req.params.id, request, {new: true, runValidators: true})
        if(!userdata){
            throw new Error("User Not Found")
        }
        res.status(200).json({
            status: "success",
            'message': 'User Updated Successfully',
            data: [
                userdata
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
export {getuserdata, getsingleuserdata, updateuserdata}