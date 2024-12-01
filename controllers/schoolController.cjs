const haversine = require('haversine-distance');
const School = require('../models/schoolModel.cjs');

//api to add a school
exports.addSchool = (req, res) => {
  console.log('Request Body:', req.body);
  const { name, address, latitude, longitude } = req.body;
  
  // Input validation
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (typeof name !== 'string' || typeof address !== 'string') {
    return res.status(400).json({ error: 'Name and address must be strings.' });
  }

  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);

  if (isNaN(lat) || isNaN(lon)) {
    return res.status(400).json({ error: 'Latitude and longitude must be numbers.' });
  }

  const schoolData = { name, address, latitude: lat, longitude: lon };

  School.create(schoolData, (err, schoolId) => {
    if (err) {
      return res.status(500).json({ error: 'Database insertion error.' });
    }
    res.status(201).json({ message: 'School added successfully.', schoolId });
  });
};


//api to list all schools based on user location and distance
exports.listSchools = (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  // Input validation
  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ error: 'Valid latitude and longitude are required.' });
  }

  const userLocation = { lat: userLat, lon: userLon };

  School.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database retrieval error.' });
    }

    // Calculate distance and sort
    const schoolsWithDistance = results.map((school) => {
      const schoolLocation = { lat: school.latitude, lon: school.longitude };
      const distance = haversine(userLocation, schoolLocation); // Distance in meters
      return { ...school, distance };
    });

    // Sort by distance
    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  });
}; 