const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5434,
  user: 'root',
  password: 'root',
  database: 'contacts'
});

client.connect();


exports.query = async(query: string, values: string[]) => {
  const { rows } = await client.query(query, values);
  return rows;
}