const { Pool } = require("pg");
require("dontenv").config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = pool;
