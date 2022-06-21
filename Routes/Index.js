var express = require("express");
var router = express.Router();
var passport = require("passport");
var DataAdmin = require("../models/ModelAdm");
var DataMhs = require("../models/ModelMhs");
var schemaDaftarMK = require("../models/ModelMK");
var schemaMahasiswa = require("../models/ModelRek");

router.get("/", function(req, res) {
  res.render("Home");
});

router.get("/LogAdm", function(req, res) {
  res.render("LogAdm");
});
router.get("/LogMhs", function(req, res) {
  res.render("LogMhs");
});


router.get("/RegAdm", function(req, res) {
  res.render("RegAdm");});
  router.post("/RegAdm",function (req, res) { 
    var username = req.body.username;
    var password = req.body.password; 
    DataAdmin.register(new DataAdmin({ username: username }),
    password,function (err, user) { 
      if (err) { 
        console.log(err);
        return res.render("RegAdm");
      } passport.authenticate("local")( req, res,function () {
        res.render("IndexAdm");  
      });  
    });});

router.post("/LogAdm", passport.authenticate("local", 
{
  successRedirect: "IndexAdm",
}), function(req, res) {

});

router.get("/RegMhs", function(req, res) {
  res.render("RegMhs");});
  router.post("/RegMhs",function (req, res) { 
    var username = req.body.username;
    var password = req.body.password; 
    DataMhs.register(new DataMhs({ username: username }),
    password,function (err, user) { 
      if (err) { 
        console.log(err);
        return res.render("RegMhs");
      } passport.authenticate("local")( req, res,function () {
        res.render("RegMhs");  
      });  
    });});

router.post("/LogMhs", passport.authenticate("local", 
{
  successRedirect: "IndexMhs",
}), function(req, res) {

});


router.get("/Choose", function(req, res) {
  res.render("Choose");
});

router.get("/Home", function(req, res) {
  res.render("Home");
});

router.get("/IndexAdm", function(req, res) {
  res.render("IndexAdm");

});

router.get("/IndexMhs", function(req, res) {
  res.render("IndexMhs");
});

router.get("/HomeAdm", function(req, res) {
  res.render("HomeAdm");
});

router.get("/HomeMhs", function(req, res) {
  res.render("HomeMhs");
});

router.get("/DRek", (req, res)=>{
  schemaDaftarMK.find({}, function(err,data) {
    res.render("DRek",{
      datalist : data
    })
  })
});

router.get("/DMatkulAdm", (req, res)=>{
  schemaDaftarMK.find({}, function(err,data) {
    res.render("DMatkulAdm",{
      datalist : data
    })
  })
});

router.get("/DMatkulMhs", (req, res)=>{
  schemaDaftarMK.find({}, function(err,data) {
    res.render("DMatkulMhs",{
      datalist : data
    })
  })
});


router.get("/Rekomendasi", (req, res)=>{
  schemaMahasiswa.find({}, function(err,data) {
    res.render("Rekomendasi",{
      datalist : data
    })
  })
});


router.get("/print", function(req, res) {
  schemaMahasiswa.find({}, function(err,data) {
    res.render("print",{
      datalist : data
    })
  })
});


router.get("/DNilaiAdm", (req, res)=>{
  schemaMahasiswa.find({}, function(err,data) {
    res.render("DNilaiAdm",{
      datalist : data
    })
  })
});

router.get("/DNilaiMhs", (req, res)=>{
  schemaMahasiswa.find({}, function(err,data) {
    res.render("DNilaiMhs",{
      datalist : data
    })
  })
});

module.exports = router;
  
  