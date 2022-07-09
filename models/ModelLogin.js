var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var schemaDataLogin = new mongoose.Schema({
    username: String,
    password: String});
// Passport-Local Mongoose will add a username, hash and salt field// to store the username, the hashed password and the salt value.// Additionally it adds some methods to the schemaschemaDataAdmin.plugin(passportLocalMongoose);module.exports = mongoose.model("User", schemaDataAdmin);

schemaDataLogin.plugin(passportLocalMongoose);

module.exports = mongoose.model("DataLogin", schemaDataLogin);