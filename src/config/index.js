require('dotenv').config()

const settings = {
  PORT: process.env.PORT,
  PROJECT_NAME: process.env.PROJECT_NAME,
  DB_PWD: process.env.DB_PWD,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  SECRET: process.env.SECRET,
  REFRESH_SECRET: process.env.REFRESH_SECRET || '',
  DOMAIN: process.env.DOMAIN || '',
  MG_API_KEY: process.env.MG_API_KEY || '',

};

const ROLES = {
  IT: 1989,
  SUPER_ADMIN: 2,
  ADMIN: 1,
  USER: 0
}

module.exports = {
  settings,
  ROLES,
};