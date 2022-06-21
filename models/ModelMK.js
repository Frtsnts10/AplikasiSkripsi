var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var schemaDaftarMK = new mongoose.Schema({
    Kode: String,
    JumlahSKS: String,
    MataKuliahDiambil: String,
    MataKuliahRekomendasi: String,});
// Passport-Local Mongoose will add a username, hash and salt field// to store the username, the hashed password and the salt value.// Additionally it adds some methods to the schemaschemaModelMK.plugin(passportLocalMongoose);module.exports = mongoose.model("User", schemaModelMK);

schemaDaftarMK.plugin(passportLocalMongoose);

module.exports = mongoose.model("MK", schemaDaftarMK);