const router = require('express').Router();

const adminController = require('../controllers/admin');

router.get('/dashboard', adminController.getDashboard);

router.get('/download-orders', adminController.downloadOrders)

module.exports = router;
