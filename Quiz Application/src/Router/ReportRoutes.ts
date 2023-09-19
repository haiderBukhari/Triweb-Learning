import express from "express";
import { getreportbyid } from "../Controller/ReportController"; 
const ReportRoutes = express.Router();

ReportRoutes.get('/:id', getreportbyid)

export {ReportRoutes}