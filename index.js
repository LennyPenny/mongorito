require('6to5/register')({
  blacklist: ['generators']
});

module.exports = require('./lib/mongorito');