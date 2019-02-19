
/*
 * GET results page.
 */
var images = require('../pictureData.json');
var data = require('../resultsData.json');

exports.viewResults = function (req, res) {
    // console.log("The id is: " + id);
    // console.log("images test" + JSON.stringify(images[id][0]));
    // console.log("data" + JSON.stringify(data[id][0].name));
    res.render('results', data);
}; 