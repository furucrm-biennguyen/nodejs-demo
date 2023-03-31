const dotenv = require("dotenv")

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'nodejs_demo',
    ssl: process.env.DB_TSL || false,
    connectionString: process.env.DB_URL,
  },
  listPerPage: process.env.LIST_PER_PAGE || 10,
};

module.exports = config;
