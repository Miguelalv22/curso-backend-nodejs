const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    username: 'nico',
    password: 'admin1234',
    database: 'my_store',
    URL: URI,
    dialect: 'postgres',
  },
  production: {
    username: 'nico',
    password: 'admin1234',
    database: 'my_store',
    URL: URI,
    dialect: 'postgres',
  },
};
