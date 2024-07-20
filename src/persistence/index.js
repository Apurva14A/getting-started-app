if (process.env.MYSQL_HOST) module.exports = require('./mysql').default;
else module.exports = require('./sqlite');
