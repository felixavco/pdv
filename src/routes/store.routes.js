const express = require('express');
const Router = express.Router;
const StoreController = require('../controllers/store.controller');

class StoreRoutes extends StoreController {
  constructor() {
    super();
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post('/create', this.create);
  }

  get Router() {
    return this.router;
  }
}

const store = new StoreRoutes();
module.exports = store.Router;