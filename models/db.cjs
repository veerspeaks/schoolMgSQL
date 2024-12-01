const mysql = require('mysql');

// MySQL connection setup
const db = mysql.createConnection({
  host: 'database-1.cvs8q2smcpls.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'il4hQStCV1LeOzroZTak',
  database: 'schoolmg',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db; 