import { Request, Response, NextFunction } from "express";
import quizModel from "../Model/QuizModel";
import jwt, { decode } from "jsonwebtoken";

const verifyUser = (req:Request, res:Response, next:NextFunction) =>{
    const authheader = req.get('Authorization')
    if(!authheader){
        return res.status(400).json({
            status: "failed",
            message: "JWT Token is not present which was given when login"
        })
    }
    const token = authheader.split(' ')[1];
    try{
        const decodedresult = <any>jwt.verify(token, process.env.JWT_SECRET_KEY || '');
        req.userid = decodedresult.userid
    }
    catch(err:any){
        return res.status(400).json({
            status: "failed",
            message: err.message
        })
    }
    next();
}
const verifyQuizUser = async (req:Request, res:Response, next:NextFunction) =>{
    try{
        const quiz = await quizModel.findById(req.params.id);
        if(quiz?.created_by != req.userid){
            throw new Error("");
        }
        next();
    }catch(err){
        return res.status(400).json({
            status: "failed",
            message: "Something Went Wrong"
        })
    }
}
const verifynotPublished = async (req:Request, res:Response, next:NextFunction) =>{
    try{
        const quiz = await quizModel.findById(req.params.id);
        if(quiz?.is_Published){
            throw new Error("");
        }
        next();
    }catch(err){
        return res.status(405).json({
            status: "failed",
            message: "Quiz is already Published you can't edit or delete it now"
        })
    }
}
export {verifyUser, verifyQuizUser, verifynotPublished}