var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var schemaDaftarMK = new mongoose.Schema({
    Kelompok: String,
    Matakuliah:[{
        MK:[{
            Nama_MK: String,
            Kode: String,
            Semester: String,
            SKS: String,
            Prasayarat: String,
            Gabungan : [{
                Matkul1: String,
                Matkul2: String,
                Matkul3: String,
            }]
        }],
        MK2:[{
            Nama_MK: String,
            Kode: String,
            Semester: String,
            SKS: String,
            Prasayarat: String,
            Gabungan : [{
                Matkul1: String,
                Matkul2: String,
                Matkul3: String,
            }]
        }],
        MK3:[{
            Nama_MK: String,
            Kode: String,
            Semester: String,
            SKS: String,
            Prasayarat: String,
            Gabungan : [{
                Matkul1: String,
                Matkul2: String,
                Matkul3: String,
            }]
        }],

      }],
    })
// Passport-Local Mongoose will add a username, hash and salt field// to store the username, the hashed password and the salt value.// Additionally it adds some methods to the schemaschemaModelMK.plugin(passportLocalMongoose);module.exports = mongoose.model("User", schemaModelMK);

schemaDaftarMK.plugin(passportLocalMongoose);

module.exports = mongoose.model("MK", schemaDaftarMK);