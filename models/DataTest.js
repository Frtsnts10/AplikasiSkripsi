var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var schemaTest = new mongoose.Schema({
  Nama: String,
  NIM: String,

  matkul: [
    {
      Kode_MK: String,
      nama_MK: String,
      nilai: String,
      hasil: String,
    },
  ],
});
// Passport-Local Mongoose will add a username, hash and salt field// to store the username, the hashed password and the salt value.// Additionally it adds some methods to the schemaschemaModelMK.plugin(passportLocalMongoose);module.exports = mongoose.model("User", schemaModelMK);

module.exports = mongoose.model("datauser", schemaTest);
