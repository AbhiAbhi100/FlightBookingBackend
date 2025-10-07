const express = require('express');
const { InfoController } = require('../../controllers');

const router = express.Router();

// Use the method defined inside info-controller.js
router.get('/info', InfoController);

module.exports = router;
