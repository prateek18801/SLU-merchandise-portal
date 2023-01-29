const router = require('express').Router();

const controller = require('../controllers/user');

router.get('/', controller.getLandingPage);

router.get('/claim-merch', controller.getClaimForm);

router.post('/claim-merch', controller.postClaimForm);

module.exports = router;
