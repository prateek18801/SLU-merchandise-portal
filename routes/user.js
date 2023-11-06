const router = require('express').Router();

const userController = require('../controllers/user');

router.get('/', userController.getLandingPage);

router.get('/claim-merch', userController.getClaimForm);

router.post('/claim-merch', userController.postClaimForm);

module.exports = router;
