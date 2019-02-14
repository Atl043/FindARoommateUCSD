/*
 * GET profile page.
 */
var data = require('../data/user_data.json');

exports.view_userProfile = function (req, res) {
    res.render('user', data);
};