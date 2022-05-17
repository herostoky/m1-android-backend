const mongoose            = require('mongoose');
const UserModel           = require('../model/userModel');
const UserConnectionModel = require('../model/userConnectionModel');
const ContentModel        = require('../model/contentModel');

try {
    mongoose.connect(process.env.DB_URL);
}
catch(err) {
    console.log(err);
}

exports.UserModel           = UserModel.compile(mongoose);
exports.UserConnectionModel = UserConnectionModel.compile(mongoose);
exports.ContentModel        = ContentModel.compile(mongoose);
