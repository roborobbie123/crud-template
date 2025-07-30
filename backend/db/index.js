const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "testdb.cbo08oumq9u5.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "v6mctKXFp2d6MjGKwnGW",
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Accept self-signed certificates (for RDS)
  },
});

module.exports = pool;

