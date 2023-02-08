const router = require('express').Router();

const controller = require('../controllers/admin');

router.get('/dashboard', controller.getDashboard);

module.exports = router;
