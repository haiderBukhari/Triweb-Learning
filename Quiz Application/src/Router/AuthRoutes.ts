import express from "express";
import {postuserdata, loginUser} from "../Controller/AuthController";
import {body} from 'express-validator'
const AuthRoutes = express.Router();
import User from "../Model/UserModel";
const isUserExist = async (emailid: String) => {
    const userlogin = await User.findOne({email: emailid}); 
    if(!userlogin){
        return false;
    }
    return true;
}
AuthRoutes.route('/Register').post([
    body('name')
    .trim()
    .not()
    .isEmpty().withMessage('Name is Required')
    .isLength({min: 4})
    .withMessage('Length of Name should be greater than 4'),
    body('email')
    .trim()
    .not()
    .isEmpty().withMessage('Email is Required')
    .custom(emailis=>{
        return isUserExist(emailis).then(isExist=>{
            if(isExist){
                return Promise.reject('Email is already in use');
            }
        }).catch(err=>{
            return Promise.reject(err);
        })
    })
    .contains('@').withMessage('Email is not valid'),
    body('password')
    .not()
    .isEmpty().withMessage('Password is Required')
    .isLength({min: 6}).withMessage('Length of Password should be greater than 6')
],postuserdata)
AuthRoutes.route('/Login').post(loginUser)

export {AuthRoutes}