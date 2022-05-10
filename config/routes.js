const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
// ========================
// Controllers
// ========================
const userController = require('../controller/userController');

// ========================
// Middlewares
// ========================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ========================
// Routes
// ========================
app.post('/user/login', userController.login);
app.get('/users', userController.findAllUser);

// ========================
// Listen
// ========================
app.listen((process.env.PORT || 7500), function () {
    console.log(`listening on ${(process.env.PORT || 7500)}`)
})