const express = require('express');
const router = express.Router();

const registerController = require('../Controllers/register');

router.post('/register' , registerController.userRegister)


module.exports= {router}