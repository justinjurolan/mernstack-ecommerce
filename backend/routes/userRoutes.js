const express = require('express');
const router = express.Router();

const {
  requireSignin,
  isAuthenticated,
  isAdmin,
} = require('../controllers/userAuthentication');

const {
  userById,
  read,
  update,
  purchaseHistory,
} = require('../controllers/userController');

router.get(
  '/secret/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  (req, res) => {
    res.json({
      user: req.profile,
    });
  }
);

router.get('/user/:userId', requireSignin, isAuthenticated, read);
router.put('/user/:userId', requireSignin, isAuthenticated, update);

router.get(
  '/orders/by/user/:userId',
  requireSignin,
  isAuthenticated,
  purchaseHistory
);

router.param('userId', userById);

module.exports = router;
