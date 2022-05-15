const UserService  = require('../service/userService');

exports.login = (req, res) => {
    console.log('login called');
    return null;
}

exports.findAllUsers = (req, res) => {
    var userSrv = new UserService(req, res);
    userSrv.findAllUsers(req, res);
}
