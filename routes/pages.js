const express = require('express');
const router = express.Router();

// Route for Privacy Policy
router.get('/privacy', (req, res) => {
    res.render('pages/privacy');
});

// Route for Terms and Conditions
router.get('/terms', (req, res) => {
    res.render('pages/terms');
});

module.exports = router;
