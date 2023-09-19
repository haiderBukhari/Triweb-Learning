import { Request, Response } from "express";
import ReportModel from "../Model/Report";

const getreportbyid = async (req: Request, res: Response) => {
    try{
        const data = await ReportModel.find({ _id: req.params.id }, { __v: false, createdAt: false, updatedAt: false })
        if(!data){
            throw new Error("Report Not Found")
        }
        res.status(400).json({
            status: "success",
            report: [
                data
            ]
        })
    }catch(err:any){
        res.status(400).json({
            status: "failed",
            message: 'Failed to get the Report'
        })
    }
}

export {getreportbyid}