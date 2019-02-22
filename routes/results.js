
/*
 * GET results page.
 */
var images = require('../data/pictureData.json');
var data = require('../data/resultsData.json');
// console.log(data.apartments);

exports.viewResults = function (req, res) {
    // console.log("The id is: " + id);
    // console.log("images test" + JSON.stringify(images[id][0]));
    // console.log("data" + JSON.stringify(data[id][0].name));
    let json = JSON.parse(JSON.stringify(data));
    var search_results = [];

    // zip available
    if (req.query.search) {
        myZip = req.query.search;
        console.log(myZip);
        for (var key in json.apartments) {
            console.log(key + " -> " + JSON.stringify(data.apartments[key].zip));
            if (myZip == data.apartments[key].zip) {
                search_results.push(data.apartments[key])
            }
        }
    } else {
        search_results = json.apartments;
        console.log("No ZIP provided")
    }

    // date available
    if (req.query.date) {
        let myDate = new Date(req.query.date);
        var temp = [];
        for (var key in search_results) {
            let apartmentDate = new Date(search_results[key].date);
            if (apartmentDate < myDate) {
                temp.push(search_results[key])
            }
        }
        search_results = temp;
    }

    // singleroom selected
    var room = "";
    var filled_room = false;

    if (req.query.singleRoom) {
        room = "single";
        filled_room = true;
    }
    // double room selected
    if (req.query.doubleRoom) { 
        room = "double";
        filled_room = true;
    }
    // living room selected
    if (req.query.livingRoom) {
        room = "living room";
        filled_room = true;
    }

    if (filled_room) {
        temp = [];
        for (var key in search_results) {
            if (search_results[key].roomsize == room) {
                temp.push(search_results[key])
            }
        }
        search_results = temp;
    }

    // Rent
    if (req.query.minRent || req.query.maxRent) {
        temp = [];
        for (var key in search_results) {
            // min rent
            more_than_min = false;
            if (req.query.minRent) { 
                if (search_results[key].rent > req.query.minRent) {
                    more_than_min = true;
                }
            }
            // max rent
            less_than_max = false;
            if (req.query.maxRent) {
                if (search_results[key].rent < req.query.maxRent) {
                    less_than_max = true;
                }
            }
            if (less_than_max == true && more_than_min == true) {
                temp.push(search_results[key])
            }
        }
        search_results = temp;
    }

    if (search_results == []) {search_results = data.apartments;}
    json.apartments = search_results;
    
    // console.log(data);
    // console.log(json);
    res.render('results', json);
}; 