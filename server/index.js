const express = require('express');
const chalk = require('chalk');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(PORT);
console.log(chalk.bold.cyan(`listening at ${PORT}`)); // eslint-disable-line
