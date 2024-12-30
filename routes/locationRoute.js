const express = require('express');
const router = express.Router();
const { getAllLocations } = require('../models/locationModel');

router.get('/api/locations', async (req, res) => {
    try {
        const locations = await getAllLocations(); // Gọi hàm getAllLocations
        // console.log('Found', locations.length, 'locations in the database.');
        console.log(locations[0]);
        res.json(locations); // Trả về dữ liệu dưới dạng JSON
    } catch (error) {
        console.error('Error fetching locations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

// in thử record đầu tiên lấy từ hàm getAllLocations
// console.log(locations[0]);