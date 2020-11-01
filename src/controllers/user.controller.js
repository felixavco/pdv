const bcrypt = require('bcryptjs');
const { ROLES, messages } = require('../config');
const { User } = require('../models');
const { response, getJWT } = require('../utilities');

class UserController {

  async create(req, res) {
    const { role, storeId } = req.user;

    if (role < ROLES.ADMIN) {
      return res.status(403).json(
        response(null, false, { message: messages.insufficient_privileges })
      );
    }

    const newUser = {
      ...req.body,
      storeId,
    }

    try {
      const [user, success] = await User.findOrCreate({ where: { email }, defaults: newUser });
      if (!success) {
        return res.status(409).json(response(null, false, { message: messages.user_already_exist }));
      }
      delete user.password;
      delete user.role;
      return res.status(201).json(response({ user }, true));
    } catch (error) {
      return res.status(500).json(response(null, false, { error: error.toString() }));
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const notAuthError = response(null, false, { message: messages.invalid_credentials });

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json(notAuthError);
      }

      const isValidPwd = await bcrypt.compare(password, user.password);

      if (!isValidPwd) {
        return res.status(401).json(notAuthError);
      }

      return res.status(200).json(getJWT(user));

    } catch (error) {
      return res.status(500).json(response(null, false, { error: error.toString() }));
    }
  }

}

module.exports = UserController;