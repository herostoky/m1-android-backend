const UserService  = require('../service/userService');

exports.login = (req, res) => {
    var userSrv = new UserService(req, res);
    userSrv.userLogin();
}

exports.findAllUsers = (req, res) => {
    var userSrv = new UserService(req, res);
    userSrv.findAllUsers();
}
