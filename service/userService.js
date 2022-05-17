const AuthService = require('./authService');
const ServiceExtension = require('./serviceExtension');
class UserService extends ServiceExtension {
    findAllUsers() {
        try {
            const UserModel = this.mongodb.UserModel;
            UserModel.find(this.req.params).then((data) => {
                this.res.status(200).json({'status':'OK', 'data':data});
            })
            .catch((err) => {
                this.res.status(500).json({'status':'KO', 'error':err});
            });
        }
        catch(err) {
            this.res.status(500).json({'status':'KO', 'error':err});
        }
    }

    userLogin(){
        try {
            const UserModel = this.mongodb.UserModel;
            UserModel.findOne({username: this.req.body.username, login_password: this.req.body.login_password}).select('_id username').then((data) => {
                if(this.isNotNull(data)) {
                    var authSrv = new AuthService(this.req, this.res);
                    var token   = authSrv.generateAndSaveUserToken();
                    this.res.status(200).json({'status':'OK', 'data':{'token': token, 'user': data}});
                } else {
                    this.res.status(403).json({'status':'KO', 'error':'Not Authorized'});
                }
                
            })
            .catch((err) => {
                this.res.status(500).json({'status':'KO', 'error':err});
            });
        }
        catch(err) {
            this.res.status(500).json({'status':'KO', 'error':err});
        }
    }

}
module.exports = UserService;
