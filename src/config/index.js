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

const messages = {
  insufficient_privileges: 'insufficient_privileges',
  user_already_exist: 'user_already_exist',
  product_already_exist: 'product_already_exist',
  invalid_credentials: 'invalid_user_name_or_password',
  no_products: 'no_products_found',
  no_product: 'product_not_found',
  no_user: 'user_not_found',
  no_users: 'no_users_found',
}

module.exports = {
  settings,
  ROLES,
  messages,
};