const express = require('express');
const router = express.Router();

const {
  requireSignin,
  isAuthenticated,
  isAdmin,
} = require('../controllers/userAuthentication');
const {
  userById,
  addOrderToHistory,
} = require('../controllers/userController');

const {
  create,
  listOrders,
  getStatusValues,
  orderById,
  updateOrderStatus,
} = require('../controllers/orderController');

const { decreaseQuantity } = require('../controllers/productController');

router.post(
  '/order/create/:userId',
  requireSignin,
  isAuthenticated,
  addOrderToHistory,
  decreaseQuantity,
  create
);

router.get(
  '/order/list/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  listOrders
);

router.get(
  '/order/status-values/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  getStatusValues
);

router.put(
  '/order/:orderId/status/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  updateOrderStatus
);

// Middleware to target the order id and userid from backend
router.param('userId', userById);
router.param('orderId', orderById);

module.exports = router;
