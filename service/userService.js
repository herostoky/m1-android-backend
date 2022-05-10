import ServiceExtension from './serviceExtension';
class UserService extends ServiceExtension {
    findAllUser(req, res) {
        try {
            const UserModel = this.mongodb.UserModel;
            UserModel.find(req.params).then((data) => {
                res.status(200).json({'status':'OK', 'data':data});
            })
            .catch((err) => {
                res.status(500).json({'status':'KO', 'error':err});
            });
        }
        catch(err) {
            res.status(500).json({'status':'KO', 'error':err});
        }
    }

}
export default UserService;