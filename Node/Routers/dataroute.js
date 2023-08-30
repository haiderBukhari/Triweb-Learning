const express = require('express')
const controllers = require('../Controllers/datacontroller')

const dataRouter = express.Router();

dataRouter.route('/')
    .get(controllers.getallmovies)
    .post(controllers.postallmovies)

module.exports = dataRouter;