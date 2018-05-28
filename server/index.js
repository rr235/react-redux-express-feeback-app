const express = require('express');
const chalk = require('chalk');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(chalk.bold.cyan(`Listening at ${PORT}`)); // eslint-disable-line
