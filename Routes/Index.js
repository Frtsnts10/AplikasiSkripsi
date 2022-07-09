var express = require("express");
var router = express.Router();
var passport = require("passport");
var schemaDataLogin = require("../models/ModelLogin");
var schemaDaftarMK = require("../models/ModelMK");
var schemaUsers = require("../models/DataUsers");

router.get("/", function(req, res) {
  res.render("Home");
});

router.get("/Home", function(req, res) {
  res.render("Home");
});

router.get("/Register", function(req, res) {
  res.render("Register");});
  router.post("/Register",function (req, res) { 
    var username = req.body.username;
    var password = req.body.password; 
    schemaDataLogin.register(new schemaDataLogin({ username: username }),
    password,function (err, user) { 
      if (err) { 
        console.log(err);
        return res.render("Login");
      } passport.authenticate("local")( req, res,function () {
        res.render("Login");  
      });  
    });});

router.post("/Login", passport.authenticate("local", 
  {
    // successRedirect: "/mahasiswa/"
    failureRedirect:"/Login"
    }), function(req, res) {

      if(req.body.username=='Admin'){
        console.log('Login as Admin')
        res.redirect('/IndexAdmin')

      }
      else{
        console.log('Login As Mhs')

        res.redirect('/IndexMhs')
      }
});

router.get("/IndexAdmin", function(req, res) {
  res.render("IndexAdmin");
});


router.get("/Login", function(req, res) {
  res.render("Login");
});

router.get("/IndexMhs", (req, res)=>{
  schemaUsers.find({}, function(err,data) {
    res.render("IndexMhs",{
      datalist : data
    })
  })
});

router.get("/DRek", (req, res)=>{
  schemaDaftarMK.find({}, function(err,data) {
    res.render("DRek",{
      datalist : data
    })
  })
});

router.get("/DMatkul", (req, res)=>{
  schemaDaftarMK.find({}, function(err,data) {
    res.render("DMatkul",{
      datalist : data
    })
  })
});

router.get("/Rekomendasi", (req, res)=>{
  schemaUsers.find({}, function(err,data) {
    res.render("Rekomendasi",{
      datalist : data
    })
  })
});


router.get("/DNilaiAdm", (req, res)=>{
  schemaUsers.find({}, function(err,data) {
    res.render("DNilaiAdm",{
      datalist : data
    })
  })
});

router.get("/DNilaiMhs", (req, res)=>{
  schemaUsers.find({}, function(err,data) {
    res.render("DNilaiMhs",{
      datalist : data
    })
  })
});


module.exports = router;
  
  