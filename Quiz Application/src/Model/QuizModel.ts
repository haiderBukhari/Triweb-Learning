import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    questions: [
        {
            QuestionNumber: String,
            Question: String,
            Options: {},
        }
    ],
    answers: {},
    created_by: {
        type: mongoose.Types.ObjectId,
    },
    is_Published: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const quizModel = mongoose.model('Quiz', quizSchema)

export default quizModel;




// {
//     "name": "New Quiz 1",
//     "questions": [
//         {
//             "QuestionNumber": "Q1",
//             "Question": "Who is the owner of KFC",
//             "Options": {
//                 "1": "Haider",
//                 "2": "Ali",
//                 "3": "Michal"
//             }
//         }
//     ],
//     "answers" : {
//         "Q1": "Michal" 
//     },
//     "created_by": "Me",
//     "is_Published": false
// }