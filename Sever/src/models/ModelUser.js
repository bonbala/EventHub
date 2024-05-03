const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
    // username: { type: String, require: true},
    // email: {type: String, require: true, },
    // password: {type: String},
    // createdAt:{type: Date, default: Date.now()},
    // updatedAt:{type: Date, default: Date.now()}
=======
    username: { type: String, require: true},
    email: {type: String, require: true, },
    password: {type: String},
    createdAt:{type: Date, default: Date.now()},
    updatedAt:{type: Date, default: Date.now()}
>>>>>>> 366051d6b85ce724dfa4ee9abc85459cb26851a2
},{collection:'user'});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;