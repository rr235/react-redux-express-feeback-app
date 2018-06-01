/* eslint-disable */
// Unfortunately using const to get module before if condition
// didnt work on heroku. Hence using inline require.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
