function goBack() {
    window.history.back();
}

function signOutTest() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    window.location.href = "/";
}
function onLoad() {
    gapi.load('auth2', function () {
        gapi.auth2.init();
    });
}