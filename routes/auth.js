const router = require('express').Router();

const controller = require('../controllers/auth');

router.get('/login', controller.getLogin);

module.exports = router;
