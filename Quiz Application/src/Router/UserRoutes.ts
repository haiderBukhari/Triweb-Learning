import express from "express";
import {getuserdata,  getsingleuserdata, updateuserdata} from "../Controller/UserController";
const UserRoutes = express.Router();
import { verifyUser } from "../Middlewares/Auth";

UserRoutes.route('/Register').get(getuserdata)
UserRoutes.route('/Register/:id').get(verifyUser, getsingleuserdata).patch(verifyUser, updateuserdata)
export {UserRoutes}