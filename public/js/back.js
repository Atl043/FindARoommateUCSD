function goBack() {
    window.history.back();
}

function signOutTest() {
    var auth2 = gapi.auth2.getAuthInstance();
    FB.init({
        appId: '352041492055393',
        cookie: true,  // enable cookies to allow the server to access 
        // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v3.2' // The Graph API version to use for the call
    });
    FB.getLoginStatus();
    FB.logout(function (response) {
        console.log('User signed out FB.');// user is now logged out
    });
    auth2.signOut().then(function () {
        console.log('User signed out Google.');
    });
    window.location.href = "/";
}
function onLoad() {
    gapi.load('auth2', function () {
        gapi.auth2.init();
    });
}