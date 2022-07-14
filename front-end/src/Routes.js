import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './User/Signup';
import Signin from './User/Signin';
import Home from './Core/Home';
import PrivateRoute from './Authentication/PrivateRoute';
import Dashboard from './User/UserDashboard';
import AdminRoute from './Authentication/AdminRoute';
import AdminDashboard from './User/AdminDashboard';
import AddCategory from './Admin/AddCategory';
import AddProduct from './Admin/AddProduct';
import Shop from './Core/Shop';
import Product from './Core/Product';
import Cart from './Core/Cart';
import Orders from './Admin/Orders';
import Profile from './User/UserProfile';
import ManageProducts from './Admin/ManageProducts';
import UpdateProduct from './Admin/UpdateProduct';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/shop" exact component={Shop}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <Route path="/product/:productId" exact component={Product}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <AdminRoute path="/admin/orders" exact component={Orders} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
