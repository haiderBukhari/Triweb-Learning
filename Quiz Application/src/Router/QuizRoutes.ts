import express from 'express'
const QuizRoutes = express.Router();
import {getQuiz, postQuiz, getQuizById, patchQuiz, DeleteQuiz, PublishQuiz} from '../Controller/QuizController'
import { verifyUser, verifyQuizUser, verifynotPublished } from '../Middlewares/Auth';
import { body } from 'express-validator';
QuizRoutes.route('/').get(verifyUser, verifyQuizUser, getQuiz).post(verifyUser, [
    body('name')
    .trim()
    .not()
    .isEmpty().withMessage('Name of the Quiz is Required')
    .isLength({min: 4}).withMessage('Length of Name should be greater than 4'),
    body('questions')
    .custom(questionList => {
        if(questionList.length == 0){
            return Promise.reject('Atleast one question is required');
        }
        return true;
    }),
    body('answers')
    .custom(answerList => {
        if(Object.keys(answerList).length == 0){
            return Promise.reject('Answer is Required');
        }
        return true;
    })
], postQuiz);
QuizRoutes.route('/:id').get(verifyUser, verifyQuizUser, getQuizById).patch(verifyUser, verifyQuizUser, verifynotPublished, patchQuiz).delete(verifyUser, verifyQuizUser, verifynotPublished, DeleteQuiz);
QuizRoutes.route('/publish/:id').patch(verifyUser, verifyQuizUser, PublishQuiz);

export {QuizRoutes};