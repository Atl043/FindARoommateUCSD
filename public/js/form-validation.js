function allFilled() {
    var filled = true;

    $('.validate').each(function () {
        if ($(this).val() == '') {
            filled = false;
            $(this).addClass("highlight-red");
            $(".incompleteErrorMsg").addClass("highlight-red");
        }
        else {
            $(this).addClass("highlight-green");
        }
    });
    return filled;
}

loadNameEmail()
function loadNameEmail() {
    if (localStorage.getItem('name') != null) {
        let name = localStorage.getItem('name');
        console.log("name " + name);
        document.getElementById("userName").value = name;
        document.getElementById("userNamelooking").value = name;
    }
    if (localStorage.getItem('email') != null) {
        let email = localStorage.getItem('email');
        console.log("email " + email);
        document.getElementById("email").value = email;
        document.getElementById("emaillooking").value = email;
    }

}

function allFilledLooking() {
    var filled = true;

    $('.validateLooking').each(function () {
        if ($(this).val() == '') {
            filled = false;
            $(this).addClass("highlight-red");
            $(".incompleteErrorMsg").addClass("highlight-red");
        }
        else {
            $(this).addClass("highlight-green");
        }
    });
    return filled;
}

/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the paramiters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

function post(path, params, method) {
    method = method || "get"; // Set method to post by default if not specified.
    // console.log(params);
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    // form.setAttribute("role", "form");
    form.setAttribute("action", path);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            //  hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

function submitData() {
    let filled = allFilled()
    if (filled === true) {
        let user = {
            "name": document.getElementById("userName").value,
            "user_state": 0,
            "imgurl": "",
            "email": document.getElementById("email").value,
            "address": document.getElementById("address").value,
            "zip": document.getElementById("zip").value,
            "description": document.getElementById('description').value,
            "roomsize": "",
            "gender": "",
            "rent": document.getElementById("rent").value,
            "date": document.getElementById("date").value,
            "ownBath": document.getElementById("ownBath").checked,
            "AC": document.getElementById("AC").checked,
            "heating": document.getElementById("heating").checked,
            "laundry": document.getElementById("laundry").checked,
            "parking": document.getElementById("parking").checked,
            "pets": document.getElementById("pets").checked,
            "bus": document.getElementById("busStop").checked,
            "gym": document.getElementById("gym").checked,
            "pool": document.getElementById("pool").checked,
            "otherapartmentNotes": document.getElementById("apartmentFeatures").value,
            "timeofday": "",
            "smokersetting": document.getElementById("smoker").checked,
            "cleanliness": document.getElementById("cleanness").value,
            "otherroommateNotes": document.getElementById("roommatePreference").value
        }
        for (var key in user) {
            if (user.hasOwnProperty(key)) {
                if (user[key] === true) {
                    user[key] = "Yes";
                }
                else if (user[key] === false) {
                    user[key] = "No"
                }
            }
        }
        // check the room size
        if (localStorage.getItem('img') != null) {
            let img = localStorage.getItem('img');
            user["imgurl"] = img;
        }
        if (document.getElementById("livingRoom").checked) {
            user["roomsize"] = "livingRoom";
        }
        else if (document.getElementById("singleRoom").checked) {
            user["roomsize"] = "single";
        }
        else {
            user["roomsize"] = "double";
        }
        // the Gender M, F, C
        if (document.getElementById("male").checked) {
            user["gender"] = "Male";
        }
        else if (document.getElementById("female").checked) {
            user["gender"] = "Female";
        }
        else {
            user["gender"] = "Coed";
        }
        // the time N, E, L
        if (document.getElementById("late").checked) {
            user["timeofday"] = "Night Owl";
        }
        else if (document.getElementById("early").checked) {
            user["timeofday"] = "Early Bird";
        }
        else {
            user["timeofday"] = "Legend";
        }
        console.log("user" + JSON.stringify(user));
        //  var data = JSON.stringify(user);

        post('/user', user, 'get');
        console.log("Offering data stored");
    }
    else {
        console.log("didn't work");
    }
};


function submitLookingData() {
    let filled = allFilledLooking()
    if (filled === true) {
        let user = {
            "name": document.getElementById("userNamelooking").value,
            "user_state": 1,
            "imgurl": "",
            "email": document.getElementById("emaillooking").value,
            "living": document.getElementById("lookinglivingRoom").checked,
            "single": document.getElementById("lookingsingleRoom").checked,
            "double": document.getElementById("lookingdoubleRoom").checked,
            "gender": "",
            "description": document.getElementById('descriptionlooking').value,
            "min_rent": document.getElementById("minRent").value,
            "max_rent": document.getElementById("maxRent").value,
            "ownBath": document.getElementById("ownBathlooking").checked,
            "AC": document.getElementById("AClooking").checked,
            "heating": document.getElementById("heatinglooking").checked,
            "laundry": document.getElementById("laundrylooking").checked,
            "parking": document.getElementById("parkinglooking").checked,
            "pets": document.getElementById("petslooking").checked,
            "bus": document.getElementById("busStoplooking").checked,
            "gym": document.getElementById("gymlooking").checked,
            "pool": document.getElementById("poollooking").checked,
            "timeofday": "",
            "smokersetting": document.getElementById("smokerlooking").checked,
            "cleanliness": document.getElementById("cleannesslooking").value,
            //  "otherroommateNotes": document.getElementById("aboutMe").value
        }

        for (var key in user) {
            if (user.hasOwnProperty(key)) {
                if (user[key] === true) {
                    user[key] = "Yes";
                }
                else if (user[key] === false) {
                    user[key] = "No"
                }
            }
        }
        // check the room size
        if (localStorage.getItem('img') != null) {
            let img = localStorage.getItem('img');
            user["imgurl"] = img;
        }

        // the Gender M, F, C
        if (document.getElementById("lookingmale").value == "on") {
            user["gender"] = "Male";
        }
        else if (document.getElementById("lookingfemale").value == "on") {
            user["gender"] = "Female";
        }
        else {
            user["gender"] = "Coed";
        }
        // the time N, E, L
        if (document.getElementById("latelooking").value == "on") {
            user["timeofday"] = "Night Owl";
        }
        else if (document.getElementById("earlylooking").value == "on") {
            user["timeofday"] = "Early Bird";
        }
        else {
            user["timeofday"] = "Legend No Sleep";
        }
        // console.log("user" + JSON.stringify(user));
        post('/user', user, 'get');
        // console.log(user);
        console.log("Looking data stored")
    }
    else {
        console.log("didn't work looking");
    }
};