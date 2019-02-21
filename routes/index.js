
/*
 * GET home page.
 */

var data = require('../data/resultsData.json');
exports.view = function(req, res){
  res.render('index', data);
};