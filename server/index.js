const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// connect to the mongoDB instance
mongoose.connect(keys.mongoURI);

// create an Express instance
const app = express();

// enable cookie authentication
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey] // keys for encryption
  })
);
app.use(passport.initialize());
app.use(passport.session());

// set routes for authentication
require('./routes/authRoutes')(app);

// listen for connections
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(chalk.bold.cyan(`Listening at ${PORT}`)); // eslint-disable-line
