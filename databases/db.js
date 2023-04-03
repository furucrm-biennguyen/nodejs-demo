const { Pool } = require('pg');
const config = require('../config/config');

const pool = new Pool(config.db);

// pool.on('connect', (client) => {
//   client.query(`SET search_path TO ${defaultSchema}, public`);
// });

/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(queryStr, params) {
  const { rows } = await pool.query(queryStr, params);

  return rows;
}

async function insert(tableName, data) {
  let queryStr = '';
  const keys = Object.keys(data);
  const values = Object.values(data);
  queryStr += `insert into ${tableName} (${keys.join(', ')}) values ('${values.join("', '")}')`;

  return query(queryStr, []);
}

/**
 * Switches to a specific database schema
 * @param {*} schemaName
 */
function connectSchema(schemaName) {
  pool.query(`SET search_path TO ${schemaName}, public;`);
}

module.exports = {
  query,
  connectSchema,
  insert,
};
