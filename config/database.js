// config/database.js
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: 'localhost', // Change to your server's IP address if necessary
  user: 'root',          // Ensure this user has remote access
  password: '', // Make sure the password is correct
  database: 'alignbook', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
