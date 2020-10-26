require('dotenv').config()

const settings = {
  PORT: process.env.PORT,
  PROJECT_NAME: process.env.PROJECT_NAME,
  DB_PWD: process.env.DB_PWD,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
};

module.exports = settings;