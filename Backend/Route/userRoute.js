const express = require('express');
const Router = express.Router();
const userController = require('./../Controller/userController');

Router.post('/signUp', userController.userSignUp);
Router.post('/signIn', userController.userSignIn);
Router.post('/getUser', userController.veriftToken, userController.getUser);
module.exports = Router;