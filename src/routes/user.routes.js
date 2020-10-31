const express = require('express');
const passport = require('passport');
const Router = express.Router;
const UserController = require('../controllers/user.controller');

class UserRoutes extends UserController {
  constructor() {
    super();
    this.protected = passport.authenticate('jwt', { session: false });
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post(
      '/create',
      this.protected,
      this.create
    );
  }

  get Router() {
    return this.router;
  }
}

const user = new UserRoutes();
module.exports = user.Router;