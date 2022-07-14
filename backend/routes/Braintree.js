const express = require('express');
const router = express.Router();

const {
  requireSignin,
  isAuthenticated,
} = require('../controllers/userAuthentication');
const { userById } = require('../controllers/userController');

const {
  generateToken,
  processPayment,
} = require('../controllers/braintreeController');

router.get(
  '/braintree/getToken/:userId',
  requireSignin,
  isAuthenticated,
  generateToken
);
router.post(
  '/braintree/payment/:userId',
  requireSignin,
  isAuthenticated,
  processPayment
);

router.param('userId', userById);

module.exports = router;
