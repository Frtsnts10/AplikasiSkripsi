var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var indexRoutes = require("./Routes/Index");

var schemaDataLogin = require("./models/ModelLogin");

app.use(require("express-session")({
  secret: "Once again Rusty wins cutest dog!",
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(schemaDataLogin.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(schemaDataLogin.serializeUser());
passport.deserializeUser(schemaDataLogin.deserializeUser());

// variables passed to every single template
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

const databaseUrl = process.env.DATABASEURL || "mongodb+srv://Admin:Admin123@cluster0.hpwumxm.mongodb.net/DataSkripsi";
mongoose.connect(databaseUrl, {useUnifiedTopology: true,useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
//seedDb();

app.use("/", indexRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}`));