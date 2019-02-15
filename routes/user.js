/*
 * GET profile page.
 */
var data = require("../data.json");

exports.view_userProfile = function (req, res) {
    if (req.query.userstate == 0) {
        json = {
            'name': req.query.name,
            'email': req.query.email,
            'imgurl': req.query.imgurl,
            'address': req.query.address,
            'userstate': 'Offering',
            'zip': req.query.zip,
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
            'otherroommateNotes': req.query.otherroommateNotes
        };
        console.log(json);
        data.user.push(json);
    } else if (req.query.userstate == 1) {
        json = {
            'name': req.query.name,
            'email': req.query.email,
            'imgurl': req.query.imgurl,
            'address': req.query.address,
            'userstate': 'Looking',
            'zip': req.query.zip,
            'roomsize': req.query.roomsize,
            'gender': req.query.gender,
            'min-rent': req.query.min-rent,
            'max-rent': req.query.max-rent,
            'rent': req.query.min-rent + '-' + req.query.max-rent,
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
        console.log('sejoifcs');
        console.log(json)
        data.user.push(json);
    }
    console.log("teste")
    res.render('user', data);
};