const express = require('express');
const passport = require('passport');
const Router = express.Router;
const ProductController = require('../controllers/product.controler');

class ProductRoutes extends ProductController {
  constructor() {
    super();
    this.router = Router();
    this.protected = passport.authenticate('jwt', { session: false });
    this.routes();
  }

  routes() {
    this.router.get('/', this.getProducts);
  }

  get Router() {
    return this.router;
  }

}

const products = new ProductRoutes();
module.exports = products.Router;