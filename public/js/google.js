function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    fullname = profile.getName();
    given_name = profile.getGivenName();
    family_name = profile.getFamilyName();
    img_url = profile.getImageUrl();
    email = profile.getEmail();

    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    var loggedIn = {
        currentUser: []
    };
    let currentUserObj = {
        "name": profile.getName(),
        "email": profile.getEmail(),
        "imgURL": profile.getImageUrl()
    };
    loggedIn.currentUser.push(currentUserObj);
    console.log(loggedIn);

    // let data = JSON.stringify(loggedIn);
    // var json = $.getJSON("../../data/user_data.json", function (data) {
    //     data.entries.push({
    //         name: profile.getName(),
    //         email: profile.getEmail(),
    //         imgURL: profile.getImageUrl()
    //     });
    //     console.log(data);
    // });
    console.log(loggedIn.currentUser[0].name);
    localStorage.setItem('name', String(loggedIn.currentUser[0].name));
    localStorage.setItem('email', String(loggedIn.currentUser[0].email));
    localStorage.setItem('currentUser', String(loggedIn.currentUser[0].name));
    localStorage.setItem('img', String(loggedIn.currentUser[0].imgURL));
    window.location.href = "/createProfile";

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}