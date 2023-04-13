
import dotenv from 'dotenv';
dotenv.config()

const config = {
  appEnv: process.env.APP_ENV || 'production',
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || '5432',
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'root',
    database: process.env.DATABASE_NAME || 'nodejs_demo',
    connectionString: process.env.DATABASE_URL || '',
    // ssl: process.env.DATABASE_TLS === 'true'
    //   ? { rejectUnauthorized: false } : false,

  },
  listPerPage: process.env.LIST_PER_PAGE || 10,
  webServer: {
    port: process.env.PORT || 3000,
  },
};

export default config;