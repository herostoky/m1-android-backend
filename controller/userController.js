const UserService  = require('../service/userService').default;

exports.login = (req, res) => {
    console.log('login called');
    return null;
}

exports.findAllUser = (req, res) => {
    var userSrv = new UserService(req, res);
    userSrv.findAllUser(req, res);
}