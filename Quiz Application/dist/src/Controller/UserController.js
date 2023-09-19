"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateuserdata = exports.getsingleuserdata = exports.postuserdata = exports.getuserdata = void 0;
const UserModel_1 = __importDefault(require("../Model/UserModel"));
const getuserdata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.find({}, { __v: false });
        res.status(200).json({
            status: "success",
            data: [
                user
            ]
        });
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
});
exports.getuserdata = getuserdata;
const postuserdata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.create(req.body);
        res.status(200).json({
            status: "success",
            'message': 'User Created Successfully',
            data: [
                user
            ]
        });
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
});
exports.postuserdata = postuserdata;
const getsingleuserdata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.find({ _id: req.params.id }, { __v: false });
        res.status(200).json({
            status: "success",
            data: [
                user
            ]
        });
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
});
exports.getsingleuserdata = getsingleuserdata;
const updateuserdata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userdata = yield UserModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(200).json({
            status: "success",
            'message': 'User Updated Successfully',
            data: [
                userdata
            ]
        });
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
});
exports.updateuserdata = updateuserdata;
