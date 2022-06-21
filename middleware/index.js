// all the middleware goes here
var middle = {};

var mongoose = require("mongoose");


middle.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/LogMhs");
};

module.exports = middle;