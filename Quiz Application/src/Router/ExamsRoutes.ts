import express from "express";
const ExamRoutes = express.Router();
import { verifyUser } from "../Middlewares/Auth";
import {getquizbyid, submitExam} from "../Controller/ExamController";

ExamRoutes.route('/:id').get(verifyUser, getquizbyid).post(verifyUser, submitExam);

export {ExamRoutes};