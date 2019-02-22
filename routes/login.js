/*
 * GET login page.
 */
var data = require("../data/data.json");

exports.viewLogin = function (req, res) {

  json = {};
  data.user[0] = json;
  res.render('login');
};

