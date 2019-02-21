
/*
 * GET results page.
 */
var images = require('../data/pictureData.json');
var data = require('../data/resultsData.json');

exports.viewResults = function (req, res) {
    // console.log("The id is: " + id);
    // console.log("images test" + JSON.stringify(images[id][0]));
    // console.log("data" + JSON.stringify(data[id][0].name));
    res.render('results', data);
}; 