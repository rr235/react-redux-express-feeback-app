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

  app.get('/api/logout', (req, res) => {
    req.logout(); // logout() is added to req by passportJS
    res.send(req.user);
  });

  // to get the authenticated user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user); // user prop is added by passportJS
  });
};
