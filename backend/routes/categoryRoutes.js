const express = require('express');
const router = express.Router();

const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require('../controllers/categoryController');
// Using middleware as authentication for the admin creating a category
const {
  requireSignin,
  isAuthenticated,
  isAdmin,
} = require('../controllers/userAuthentication');
const { userById } = require('../controllers/userController');

router.get('/category/:categoryId', read);
router.get('/categories', list);
router.post(
  '/category/create/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  create
);
router.put(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  update
);
router.delete(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuthenticated,
  isAdmin,
  remove
);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
