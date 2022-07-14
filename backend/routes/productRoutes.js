const express = require('express');
const router = express.Router();

const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
  listSearch,
} = require('../controllers/productController');
// Using middleware as authentication for the admin creating a category
const {
  requireSignin,
  isAuthenticated,
  isAdmin,
} = require('../controllers/userAuthentication');
const { userById } = require('../controllers/userController');

// Crud functionality for products
router.get('/product/:productId', read);
router.post(
  '/product/create/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  create
);
router.delete(
  '/product/:productId/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  remove
);
router.put(
  '/product/:productId/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  update
);

router.get('/products', list);
router.get('/products/search', listSearch);
router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);
router.post('/products/by/search', listBySearch);
router.get('/products/photo/:productId', photo);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
