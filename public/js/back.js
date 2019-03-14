function goBack() {
    window.history.back();
}

function signOutTest() {
    var auth2 = gapi.auth2.getAuthInstance();
    FB.init({
        appId: 352041492055393,
        cookie: true,  // enable cookies to allow the server to access 
        // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v3.2' // The Graph API version to use for the call
    });
    FB.getLoginStatus(handleSessionResponse);
    FB.logout(function (response) {
        console.log('User signed out FB.');// user is now logged out
    });
    auth2.signOut().then(function () {
        console.log('User signed out Google.');
    });
    window.location.href = "/";
}
//handle a session response from any of the auth related calls
function handleSessionResponse(response) {
    //if we dont have a session (which means the user has been logged out, redirect the user)
    if (!response.session) {
        window.location = "/mysite/Login.aspx";
        return;
    }

    //if we do have a non-null response.session, call FB.logout(),
    //the JS method will log the user out of Facebook and remove any authorization cookies
    FB.logout(handleSessionResponse);
}

function onLoad() {
    gapi.load('auth2', function () {
        gapi.auth2.init();
    });
}