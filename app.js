
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var results = require('./routes/results')
var profile = require('./routes/profile')
var login = require('./routes/login');
var user = require('./routes/user');
var settings = require('./routes/settings');
var createProfile = require('./routes/createProfile');
// Example route
// var user = require('./routes/user');

// facebook start
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: "352041492055393",
  clientSecret: "e4a74fb20b4494a279ddac434888257d",
  callbackURL: "https://find-a-roommate-ucsd.herokuapp.com/"
},
  function (accessToken, refreshToken, profile, done) {
    User.findOrCreate(function (err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
// end of facebook


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/index', index.view);
app.get('/results', results.viewResults);
app.get('/profile', profile.viewProfile);
app.get('/', login.viewLogin);
app.get('/user', user.view_userProfile);
app.get('/settings', settings.viewSettings);
app.get('/createProfile', createProfile.viewCreateProfile);
// Example route
// app.get('/users', user.list);

// facebook start
// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/createProfile',
    failureRedirect: '/'
  }));
// app.get('/auth/facebook',
//   passport.authenticate('facebook', { scope: ['read_stream', 'publish_actions'] })
// );
// facebook end

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
