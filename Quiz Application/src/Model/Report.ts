import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
    userID: mongoose.Types.ObjectId,
    quizID: mongoose.Types.ObjectId,
    TotalScore: Number,
    ObtainedScore: Number,
}, {timestamps: true})

const ReportModel = mongoose.model('Result', ReportSchema);
export default ReportModel;