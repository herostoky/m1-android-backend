const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const cors       = require('cors');

// ========================
// Middlewares
// ========================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ========================
// Controllers
// ========================
// **** USER ****
const userRouter     = express.Router();
const userController = require('../controller/userController');
app.use('/user', userRouter); 
// **** CONTENT ****
const contentRouter     = express.Router();
const contentController = require('../controller/contentController');
app.use('/content', contentRouter); 

// ========================
// Routes
// ========================
// **** USER ****
userRouter.get ('/find-all', userController.findAllUsers);
userRouter.post('/login',    userController.login);
userRouter.post('/logout',   userController.login);
// **** CONTENT ****
contentRouter.get ('/find-all', contentController.findAllContents);

// ========================
// Listen
// ========================
app.listen((process.env.PORT || 7500), function () {
    console.log(`listening on ${(process.env.PORT || 7500)}`)
})
