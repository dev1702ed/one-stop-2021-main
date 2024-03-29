const express = require('express');

const emailRouter = express.Router();
const Controller = require('../controllers');

emailRouter.post('/send', Controller.emailController.sendEmail);

module.exports = { emailRouter };
