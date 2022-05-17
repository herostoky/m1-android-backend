var crypto = require('crypto');
const ServiceExtension = require('./serviceExtension');
class AuthService extends ServiceExtension {
    generateAndSaveUserToken(user) {
        try {
            var token = this.randomDigit();
            const UserConnectionModel = this.mongodb.UserConnectionModel;
            var userConnectionModel   = new UserConnectionModel();
            userConnectionModel.user            = user;
            userConnectionModel.token           = token;
            userConnectionModel.expiration_date = null; //TODO: Generate Token expiration date
            userConnectionModel.save();
            return userConnectionModel;
        }
        catch(err) {
            this.res.status(500).json({'status':'KO', 'error':err.message});
        }
    }
    randomDigit(length = 20) {
        return crypto.randomBytes(length).toString('hex');
    }
    hashString(string = "") {
        return crypto.createHash('sha256').update(string ?? "").digest('hex');
    }
}
module.exports = AuthService;
