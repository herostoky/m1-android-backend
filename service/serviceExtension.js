const mongodb = require('../config/mongodb');
class ServiceExtension {
    constructor(req, res) {
        this.errors  = null;
        this.req     = req;
        this.res     = res;
        this.mongodb = mongodb;
    }
    hasError() {
        return bool(this.errors !== null);
    }
    addError(error) {
        this.errors = this.errors ?? [];
        this.errors.push(error);
    }
    isNotNull(variable) {
        return (variable != null && variable != undefined); 
    }
}
module.exports = ServiceExtension;
