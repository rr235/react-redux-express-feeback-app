const passport = require('passport');

module.exports = app => {
  // route to authenticate the request
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'] // data we are intereseted in after authentication
    })
  );

  // callback route on successfull authentication
  app.get('/auth/google/callback', passport.authenticate('google'));
};
