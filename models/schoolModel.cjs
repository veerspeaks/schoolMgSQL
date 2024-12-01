const db = require('./db.cjs');

const School = {};

// Add a new school
School.create = (schoolData, callback) => {
  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  const values = [schoolData.name, schoolData.address, schoolData.latitude, schoolData.longitude];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      return callback(err);
    }
    callback(null, result.insertId);
  });
};

// Fetch all schools
School.getAll = (callback) => {
  const sql = 'SELECT * FROM schools';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.stack);
      return callback(err);
    }
    callback(null, results);
  });
};

module.exports = School; 