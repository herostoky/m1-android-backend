const UserService  = require('../service/userService');

exports.login = (req, res) => {
    var userSrv = new UserService(req, res);
    userSrv.userLogin();
}

exports.logout = (req, res) => {
    var userSrv = new UserService(req, res);
    userSrv.userLogout();
}

exports.findAllUsers = (req, res) => {
    var userSrv = new UserService(req, res);
    userSrv.findAllUsers();
}
