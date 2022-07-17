var express = require("express");
var router = express.Router();
var passport = require("passport");
var schemaDataLogin = require("../models/ModelLogin");
var schemaHistori = require("../models/DataHistori");
var schemaTest = require("../models/DataTest");

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
        console.log('Login As Mhs/User')

        res.redirect('/IndexMhs')
      }
});

router.get("/IndexAdmin", function(req, res) {
  res.render("IndexAdmin");
});

router.get("/DRek", function(req, res) {
  res.render("DRek");
});


router.get("/Login", function(req, res) {
  res.render("Login");
});

router.get("/inputNilai", function(req, res) {
  res.render("inputNilai");
});

router.get("/IndexMhs", (req, res)=>{
  schemaHistori.find({}, function(err,data) {
    res.render("IndexMhs",{
      datalist : data
    })
  })
});

router.get("/Rekomendasi", (req, res)=>{
  schemaTest.find({}, function(err,data) {
    res.render("Rekomendasi",{
      datalist : data
    })
  })
});


router.get("/DNilaiAdm", (req, res)=>{
  schemaTest.find({}, function(err,data) {
    res.render("DNilaiAdm",{
      datalist : data
    })
  })
});

router.get("/DNilaiMhs", (req, res)=>{
  schemaTest.find({}, function(err,data) {
    res.render("DNilaiMhs",{
      datalist : data
    })
  })
});

router.get("/input", function(req, res) {
  res.render("input");
});

router.get("/HasilRek", (req, res)=>{
  schemaHistori.find({}, function(err,data) {
    res.render("HasilRek",{
      datalist : data
    })
  })
});



module.exports = router;
  
  