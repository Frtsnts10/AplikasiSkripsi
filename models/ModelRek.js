var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var schemaMahasiswa = new mongoose.Schema({

    name: String,
  
    nim: String,
  
    rekomendasi:Boolean,
  
    matkul:[{
  
      nama_matakuliah: String,  
  
      nilai : String,
  
      hasil : String
  
    }]
  
  
  
  });
// Passport-Local Mongoose will add a username, hash and salt field// to store the username, the hashed password and the salt value.// Additionally it adds some methods to the schemaschemaModelMK.plugin(passportLocalMongoose);module.exports = mongoose.model("User", schemaModelMK);



module.exports = mongoose.model("mahasiswa", schemaMahasiswa);