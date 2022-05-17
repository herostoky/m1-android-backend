const ServiceExtension = require('./serviceExtension');
class ContentService extends ServiceExtension {
    findAllContents() {
        try {
            const ContentModel = this.mongodb.ContentModel;
            ContentModel.find(this.req.params).then((data) => {
                this.res.status(200).json({'status':'OK', 'data':data});
            })
            .catch((err) => {
                this.res.status(500).json({'status':'KO', 'error':err});
            });
        }
        catch(err) {
            this.res.status(500).json({'status':'KO', 'error':err.message});
        }
    }
}
module.exports = ContentService;
