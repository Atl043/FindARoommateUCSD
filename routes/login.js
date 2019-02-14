/*
 * GET login page.
 */
var data = require('../data/user_data.json');

exports.viewLogin = function (req, res) {
  res.render('login', data);

};

