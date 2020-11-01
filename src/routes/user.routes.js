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
      '/login',
      this.login
    );

    this.router.post(
      '/create',
      this.protected,
      this.create
    );

    this.router.get(
      '/user-data',
      this.protected,
      this.getUser
    );

    this.router.get(
      '/:id',
      this.protected,
      this.getOne
    );

    this.router.get(
      '/',
      this.protected,
      this.getList
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
    )
  }

  get Router() {
    return this.router;
  }
}

const user = new UserRoutes();
module.exports = user.Router;