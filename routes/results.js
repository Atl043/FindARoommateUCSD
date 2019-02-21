
/*
 * GET results page.
 */
var images = require('../data/pictureData.json');
var data = require('../data/resultsData.json');

exports.viewResults = function (req, res) {
    // console.log("The id is: " + id);
    // console.log("images test" + JSON.stringify(images[id][0]));
    // console.log("data" + JSON.stringify(data[id][0].name));
    let json = [];
    // zip
    if (req.search) {
    }


    // for for zain and joanna
    // important to implementing search
    for (var key in data.apartments) {
        console.log(key + " -> " + JSON.stringify(data.apartments[key].zip));
        // this will get the zip of each apartment from resultsData.json
    }



    // date available
    if (req.date) {

    }
    // singleroom selected
    if (req.singleRoom) { }
    // double room selected
    if (req.doubleRoom) { }
    // living room selected
    if (req.livingRoom) { }
    // min rent
    if (req.minRent) { }
    // max rent
    if (req.maxRent) { }

    res.render('results', data);
}; 