const AuthService = require('./authService');
const ServiceExtension = require('./serviceExtension');
class UserService extends ServiceExtension {
    findAllUsers() {
        try {
            const UserModel = this.mongodb.UserModel;
            UserModel
                .find( this.req.params )
                .then(
                    (data) => {
                        this.res.status(200).json({'status':'OK', 'data':{'users': data}});
                    }
                )
                .catch(
                    (err) => {
                        this.res.status(500).json({'status':'KO', 'error':err.message});
                    }
                );
        }
        catch(err) {
            this.res.status(500).json({'status':'KO', 'error':err.message});
        }
    }

    userLogin() {
        try {
            const UserModel    = this.mongodb.UserModel;
            var authSrv        = new AuthService(this.req, this.res);
            var hashedPassword = authSrv.hashString(this.req.body.login_password);
            UserModel
                .findOne( {username: this.req.body.username, login_password: hashedPassword} ).select('_id username')
                .then(
                    (data) => {
                        if(this.isNotNull(data)) {
                            var token = authSrv.generateAndSaveUserToken(data);
                            this.res.status(200).json({'status':'OK', 'data':{'token': token}});
                        } else {
                            this.res.status(403).json({'status':'KO', 'error':'Not Authorized'});
                        }
                    }
                )
                .catch(
                    (err) => {
                        this.res.status(500).json({'status':'KO', 'error':err.message});
                    }
                );
        }
        catch(err) {
            this.res.status(500).json({'status':'KO', 'error':err.message});
        }
    }

    userLogout() {

    }

}
module.exports = UserService;
