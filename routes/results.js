
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
    if (req.query.search) {
        let myZip = req.query.search;
        console.log(myZip);
        for (var key in data.apartments) {
            let zip = data.apartments[key].zip;
            if (zip.includes(myZip)) { // if zip includes it then console.log test
                console.log("test");
            }
        }
    }


    // for for zain and joanna
    // important to implementing search
    for (var key in data.apartments) {
        console.log(key + " -> " + JSON.stringify(data.apartments[key].zip));
        // this will get the zip of each apartment from resultsData.json
        // let temp = new Date(data.apartments[key].date);
        // console.log("temp: " + temp);
    }

    // date available
    if (req.query.date) {
        console.log(req.query.date);
        let myDate = new Date(req.query.date);

        for (var key in data.apartments) {
            let apartmentDate = new Date(data.apartments[key].date);
            console.log(apartmentDate);
            console.log(apartmentDate < myDate)
            // should be true if the apartment date is before they date i set
            // false otherwise
            if (apartmentDate < myDate) {
                console.log(apartmentDate < myDate) // should be true
            }
        }
    }
    // singleroom selected
    if (req.query.singleRoom) {

    }
    // double room selected
    if (req.query.doubleRoom) { }
    // living room selected
    if (req.query.livingRoom) { }
    // min rent
    if (req.query.minRent) { }
    // max rent
    if (req.query.maxRent) { }

    res.render('results', data);
}; 