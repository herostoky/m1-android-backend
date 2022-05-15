const ContentService = require('../service/contentService');

exports.login = (req, res) => {
    console.log('login called');
    return null;
}

exports.findAllContents = (req, res) => {
    var contentSrv = new ContentService(req, res);
    contentSrv.findAllContents(req, res);
}
