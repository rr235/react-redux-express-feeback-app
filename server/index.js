const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyPraser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

// connect to the mongoDB instance
mongoose.connect(keys.mongoURI);

// create an Express instance
const app = express();

// for parsing the request body
app.use(bodyPraser.json());

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

require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // to serve production assets (css and js)
  app.use(express.static('client/build'));

  // serve index.html if the request doesnt match any of the defined route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// listen for connections
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(chalk.bold.cyan(`Listening at ${PORT}`)); // eslint-disable-line
