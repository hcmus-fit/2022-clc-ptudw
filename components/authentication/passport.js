const passport = require('passport');
const LocalStrategy = require('passport-local');
const authenticationService = require('./authenticationService');

passport.use(new LocalStrategy({usernameField: 'email'}, async function verify(username, password, cb) {
  console.log('verify' + username + password);
  const user = await authenticationService.verifyUser(username, password);
  if (user) {
    return cb(null, user);
  }
  return cb(null, false);
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, email: user.email });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

module.exports = passport;