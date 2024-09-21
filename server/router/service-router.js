const express = require('express');
const router = express.Router();
const services = require('../controllers/service-controller');

router.route('/service').get(services);

module.exports = router;