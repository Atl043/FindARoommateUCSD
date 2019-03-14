function goBack() {
    window.history.back();
}

function signOutTest() {
    var auth2 = gapi.auth2.getAuthInstance();
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