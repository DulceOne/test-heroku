const express = require('express');
const controler = require('./controler.js');
const Router = express.Router();

Router.post('/create',controler.test);
module.exports = Router;