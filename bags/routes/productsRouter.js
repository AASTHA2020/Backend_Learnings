const express = require('express');
const router = express.Router();

// Simple route to check if the router is working
router.get('/', (req, res) => {
  res.send('Working User router');
});

module.exports = router;
