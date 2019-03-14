function goBack() {
    window.history.back();
}

function signOutTest() {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '352041492055393',
            cookie: true,  // enable cookies to allow the server to access 
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v3.2' // The Graph API version to use for the call
        });
        // Now that we've initialized the JavaScript SDK, we call 
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
            console.log('post login2 ');
        });
    };

    // Load the SDK asynchronously
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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