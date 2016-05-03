var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Accounts = new Schema({
    username: String,
    password: String,
    emailAddress: String
});

module.exports = mongoose.model('Accounts', Accounts);
