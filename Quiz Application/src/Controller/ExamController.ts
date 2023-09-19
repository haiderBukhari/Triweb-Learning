import { Request, Response } from "express";
import quizModel from "../Model/QuizModel";
import ReportModel from "../Model/Report";
const getquizbyid = async (req:Request, res:Response) => {
    try{
        const allquiz = await quizModel.findById(req.params.id);
        const quiz = await quizModel.find({_id: req.params.id}, {_id:false, name: true, questions:true});
        if(!allquiz?.is_Published){
            return res.status(400).json({status: "failed", message: "Quiz is not Published yet"})
        }
        if(allquiz?.created_by == req.userid){
            return res.status(400).json({status: "failed", message: "You are not allowed to attempt this quiz as you are not the creator of this quiz"})
        }
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
const submitExam = async (req:Request, res:Response) =>{
    try{
        const quiz = await quizModel.findById(req.params.id);
        if(!quiz?.is_Published){
            return res.status(400).json({status: "failed", message: "Quiz is not Published yet"})
        }
        if(quiz?.created_by == req.userid){
            return res.status(400).json({status: "failed", message: "You are not allowed to attempt this quiz as you are not the creator of this quiz"})
        }
        const report = await ReportModel.findOne({userID:req.userid});
        if(report){
            return res.status(400).json({status: "failed", message: "You have already attempted this quiz", resultID: report._id})
        }
        const answers = quiz?.answers;
        const keys = Object.keys(answers)
        const values = Object.values(answers)
        const recievedanswers = req.body.answers;
        let totalmarks = 0, obtmarks = 0; 
        for(let i = 0; i<keys.length; i++){
            if(recievedanswers[keys[i]] == values[i]){
                obtmarks+=10;
            }
            totalmarks+=10;
        }
        const sdata = await ReportModel.create({quizID: quiz?._id, userID: req.userid, TotalScore: totalmarks, ObtainedScore: obtmarks});
        res.status(200).json({
            resultID: sdata._id,
            status: "success",
            message: "Quiz Submitted Successfully",
            totalMarks: totalmarks,
            ObtainedMarks: obtmarks
        })
    }catch(err){
        res.status(400).json({
            status: "failed",
            message: "Failed to Submit the Exam"
        })
    }
} 
export {getquizbyid, submitExam}