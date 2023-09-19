import express, {Request, Response, NextFunction} from 'express';
import morgan  from 'morgan';
import {UserRoutes} from './src/Router/UserRoutes'
import {AuthRoutes} from './src/Router/AuthRoutes';
import {QuizRoutes} from './src/Router/QuizRoutes';
import {ExamRoutes} from './src/Router/ExamsRoutes';
import { ReportRoutes } from './src/Router/ReportRoutes';
const app = express();

app.use(express.json());
app.use(morgan('dev')); 

declare global {
    namespace Express {
        interface Request {
            userid: string
        }
    }
}

app.use('/user', UserRoutes)
app.use('/auth', AuthRoutes)
app.use('/quiz', QuizRoutes)
app.use('/exam', ExamRoutes)
app.use('/report', ReportRoutes)

export {app}