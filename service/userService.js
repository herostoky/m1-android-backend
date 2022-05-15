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
}
module.exports = UserService;
