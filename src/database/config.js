module.exports = {
  development: {
    username: 'postgres',
    password: 'root',
    database: 'pg_pdv_db',
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'postgres',
    password: 'root',
    database: 'pg_pdv_db_test',
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  }
};