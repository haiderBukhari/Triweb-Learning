"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../Controller/UserController");
const UserRoutes = express_1.default.Router();
exports.UserRoutes = UserRoutes;
UserRoutes.route('/').get(UserController_1.getuserdata).post(UserController_1.postuserdata);
UserRoutes.route('/:id').get(UserController_1.getsingleuserdata).patch(UserController_1.updateuserdata);
