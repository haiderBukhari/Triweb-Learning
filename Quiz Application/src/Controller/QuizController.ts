import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from "express";
import quizModel from "../Model/QuizModel";

const getQuiz = (req:Request, res:Response) => {
    res.json({
        status: "success"
    })
}
const postQuiz = async (req:Request, res:Response) => {
    try{
        const validationr  = validationResult(req);
        if(!validationr.isEmpty()){
            return res.status(422).json({
                status: "failed",
                message: validationr.array()
            })
        }
        const finalquiz = {...req.body, created_by: req.userid};
        let quiz = await quizModel.create(finalquiz);
        res.status(200).json({
            status: "success",
            message: "Quiz Created Successfully",
            quizID: quiz._id,
            quiz: [
                quiz
            ]
        }) 
    }catch(err:any){
        res.status(400).json({
            status: "failed",
            message: "Something Went Wrong Change Quiz Name and Try Again"
        })
    }
}
const getQuizById = async (req:Request, res:Response) => {
    try{
        const quiz = await quizModel.find({_id: req.params.id}, {name: true, questions:true, answers: true});
        res.status(200).json({
            status: "success",
            quiz: [
                quiz
            ]
        })
    }catch(err){
        res.status(400).json({
            status: "failed",
            message: "Quiz with the ID is not found"
        })
    }
}
const patchQuiz = async (req:Request, res:Response) => {
    try{
        const quiz = await quizModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        res.status(200).json({
            status: "success",
            message: "Updated Successfully",
            quiz: [
                quiz
            ]
        })
    }
    catch(err:any){
        res.status(400).json({
            status: "failed",
            message: "Error in Updating the Quiz"
        })
    }
}
const DeleteQuiz = async (req:Request, res:Response) => {
    try{
        await quizModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            message: "Deleted Successfully"
        })
    }catch(err:any){
        res.status(400).json({
            status: "failed",
            message: "Error in Deleting the Quiz"
        })
    }
}
const PublishQuiz = async (req:Request, res:Response) => {
    try{
        await quizModel.findByIdAndUpdate(req.params.id, {is_Published: true}, {new: true, runValidators: true});
        res.status(200).json({
            status: "success",
            message: "Quiz Publish Successfully"
        })
    }catch(err:any){
        res.status(400).json({
            status: "failed",
            message: "Error in Updating the Quiz"
        })
    }
}

export {getQuiz, postQuiz, getQuizById, patchQuiz, DeleteQuiz, PublishQuiz}