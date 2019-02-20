
/*
 * GET home page.
 */

var data = require('../resultsData.json');
exports.view = function(req, res){
  res.render('index', data);
};