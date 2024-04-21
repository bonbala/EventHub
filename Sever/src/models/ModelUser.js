const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, require: true},
    email: {type: String, require: true, },
    password: {type: String},
    createdAt:{type: Date, default: Date.now()},
    updatedAt:{type: Date, default: Date.now()}
},{collection:'User'});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;