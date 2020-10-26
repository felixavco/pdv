const express = require('express');
const Router = express.Router;
const ProductController = require('../controllers/product.controler');

class ProductRoutes extends ProductController {
  constructor() {
    super();
    this.router = Router();
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