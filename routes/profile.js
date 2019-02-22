/*
 * GET profile page.
 */
var images = require('../data/pictureData.json');
var data = require('../data/profileData.json');
exports.viewProfile = function (req, res) {
    var id = req.params.id;
    // console.log("The id is: " + id);
    // console.log("images test" + JSON.stringify(images[id][0]));
    // console.log("data" + JSON.stringify(data[id][0].name));
    res.render('profile', {
        'id': id,
        'images': images[id],
        'name': data[id][0].name,
        'email': data[id][0].email,
        'imgurl': data[id][0].imgurl,
        'aptimgurl': data[id][0].aptimgurl,
        'address': data[id][0].address,
        'zip': data[id][0].zip,
        'date': data[id][0].date,
        'description': data[id][0].description,
        'roomsize': data[id][0].roomsize,
        'gender': data[id][0].gender,
        'rent': data[id][0].rent,
        'ownBath': data[id][0].ownBath,
        'AC': data[id][0].AC,
        'heating': data[id][0].heating,
        'laundry': data[id][0].laundry,
        'parking': data[id][0].parking,
        'pets': data[id][0].pets,
        'bus': data[id][0].bus,
        'gym': data[id][0].gym,
        'pool': data[id][0].pool,
        'otherapartmentNotes': data[id][0].otherapartmentNotes,
        'timeofday': data[id][0].timeofday,
        'smokersetting': data[id][0].smokersetting,
        'cleanliness': data[id][0].cleanliness,
        'otherroommateNotes': data[id][0].otherroommateNotes
    });
};