const dotenv = require("dotenv")

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || '5432',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    database: process.env.DATABASE_NAME || 'nodejs_demo',
    ssl: process.env.DATABASE_TSL || false,
    connectionString: process.env.DATABASE_URL,
  },
  listPerPage: process.env.LIST_PER_PAGE || 10,
};

module.exports = config;
