const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController.cjs');

// Add School API
router.post('/add', schoolController.addSchool);

// List Schools API
router.get('/list', schoolController.listSchools);

module.exports = router; 