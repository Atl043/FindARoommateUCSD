/*
 * GET profile page.
 */
var data = require("../data/data.json");

exports.view_userProfile = function (req, res) {
    if (req.query.user_state == 0) {
        json = {
            'name': req.query.name,
            'email': req.query.email,
            'imgurl': req.query.imgurl,
            'address': req.query.address,
            'userstate': 'Offering apartment',
            'zip': req.query.zip,
            'description': req.query.description,
            'roomsize': req.query.roomsize,
            'gender': req.query.gender,
            'rent': req.query.rent,
            'ownBath': req.query.ownBath,
            'AC': req.query.AC,
            'heating': req.query.heating,
            'laundry': req.query.laundry,
            'parking': req.query.parking,
            'pets': req.query.pets,
            'bus': req.query.bus,
            'gym': req.query.gym,
            'pool': req.query.pool,
            'otherapartmentNotes': req.query.otherapartmentNotes,
            'timeofday': req.query.timeofday,
            'smokersetting': req.query.smokersetting,
            'cleanliness': req.query.cleanliness,
            'otherroommateNotes': "Notes: " + req.query.otherroommateNotes
        };
        console.log(json);
        data.user[0] = json;
    } else if (req.query.user_state == 1) {
        let room = "";
        if (req.query.living === "Yes") {
            room += "Living Room";
        }
        if (room !== "") {
            room += ", "
        }
        if (req.query.single === "Yes") {
            room += "Single";
        }
        if (room !== "") {
            room += ", "
        }
        if (req.query.double === "Yes") {
            room += "Double";
        }
        json = {
            'name': req.query.name,
            'email': req.query.email,
            'imgurl': req.query.imgurl,
            'address': req.query.address,
            'userstate': 'Looking for apartment',
            'zip': req.query.zip,
            'description': req.query.description,
            'roomsize': room,
            'gender': req.query.gender,
            'min_rent': req.query.min_rent,
            'max_rent': req.query.max_rent,
            'rent': req.query.min_rent + '-' + req.query.max_rent,
            'ownBath': req.query.ownBath,
            'AC': req.query.AC,
            'heating': req.query.heating,
            'laundry': req.query.laundry,
            'parking': req.query.parking,
            'pets': req.query.pets,
            'bus': req.query.bus,
            'gym': req.query.gym,
            'pool': req.query.pool,
            'otherapartmentNotes': req.query.otherapartmentNotes,
            'timeofday': req.query.timeofday,
            'smokersetting': req.query.smokersetting,
            'cleanliness': req.query.cleanliness,
            'otherroommateNotes': req.query.otherroommateNotes
        };
        console.log(json)
        data.user[0] = json;
    }

    console.log(data)
    res.render('user', data);
};