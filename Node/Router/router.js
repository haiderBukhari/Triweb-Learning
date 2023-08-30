const express = require('express')
const DataRouter = express.Router();
const dataControllers = require('../Controller/dataController')
const validate = (req, res, next) => {
    if(!req.body.name || !req.body.email){
        return res.status(200).json({
            status: "fail",
            message: "Cant post the data"
        })
    }
    next();
} 
DataRouter.route('/sql').get(dataControllers.GetUserData).post(validate, dataControllers.AddUserData)
DataRouter.route('/sql/:id').get(dataControllers.GetIdData)

module.exports = DataRouter;