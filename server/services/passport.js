const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  /** Note: id refers to the auto id created by mongodb for each entry
   * i.e. id refers to the _id['$oid'] of
   * "_id": {
   *    "$oid": "5b0ece943c561c42314606d8"
   * }
   * */
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
      /** heroku connection goes through a proxy, when it happens
       * google strategy defaults to http from https.
       * To prevent this set proxy: true */
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      return done(null, user);
    }
  )
);
