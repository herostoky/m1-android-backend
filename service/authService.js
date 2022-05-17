const ServiceExtension = require('./serviceExtension');
class AuthService extends ServiceExtension {
    generateAndSaveUserToken() {
        try {
            var token = this.randomDigit();
            return token;
        }
        catch(err) {
            this.res.status(500).json({'status':'KO', 'error':err});
        }
    }
    randomDigit() {
        var result = '';
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 43; i++ )
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        return result;
    }
}
module.exports = AuthService;
