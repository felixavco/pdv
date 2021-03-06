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
    this.router.get(
      '/',
      this.protected,
      this.getList
    );
    this.router.get(
      '/:productCode',
      this.protected,
      this.getOne
    );
    this.router.post(
      '/',
      this.protected,
      this.create
    );
    this.router.put(
      '/:id',
      this.protected,
      this.update
    );
    this.router.delete(
      '/:id',
      this.protected,
      this.delete
    );
  }

  get Router() {
    return this.router;
  }

}

const products = new ProductRoutes();
module.exports = products.Router;