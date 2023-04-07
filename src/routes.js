const express = require('express');
const UserController = require('./controllers/userController');

const routes = express.Router();

routes.post('/', UserController.store);

module.exports = routes;