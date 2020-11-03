const bcrypt = require('bcryptjs');
const { ROLES, messages } = require('../config');
const { User } = require('../models');
const { response, getJWT } = require('../utilities');

class UserController {

  async create(req, res) {
    const { role, storeId } = req.user;

    if (role < ROLES.ADMIN) {
      return res.status(403).json(
        response({ message: messages.insufficient_privileges }, false)
      );
    }

    const newUser = {
      ...req.body,
      storeId,
    }

    try {
      const [user, success] = await User.findOrCreate({ where: { email }, defaults: newUser });
      if (!success) {
        return res.status(409).json(response({ message: messages.user_already_exist }, false));
      }
      delete user.password;
      delete user.role;
      return res.status(201).json(response({ user }));
    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const notAuthError = response({ message: messages.invalid_credentials }, false);

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
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  getUser(req, res) {
    const { user } = req;
    delete user.password;
    res.json(response({ user }));
  }

  async getOne(req, res) {
    const { role, storeId } = req.user;
    const { id } = req.params;

    if (role < ROLES.ADMIN) {
      return res.status(403).json(
        response({ message: messages.insufficient_privileges }, false)
      );
    }

    try {
      const user = await User.findOne({ where: { storeId, id } });
      if (!user) {
        return res.status(404).json(
          response({ message: messages.no_user }, false)
        )
      }

      delete user.password;
      return res.json(response({ user }));
    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  async getList(req, res) {
    const { storeId, role } = req.user;

    if (role < ROLES.ADMIN) {
      return res.status(403).json(
        response({ message: messages.insufficient_privileges }, false)
      );
    }

    let { orderby, order } = req.query;
    let page = parseInt(req.query.page, 10);
    let limit = parseInt(req.query.limit, 10);

    if (!page || page < 1) {
      page = 1;
    }

    if (!limit || limit < 10) {
      limit = 10
    }

    orderby = orderby !== undefined ? order.toLowerCase() : 'lastName';
    order = order !== undefined ? order.toUpperCase() : 'ASC';

    try {
      const users = await User.findAndCountAll({
        where: { storeId },
        limit,
        offset: page - 1,
        order: [[orderby, order]],
        attributes: {
          include: ['id', 'firstName', 'middleName', 'lastName', 'secondLastName', 'email', 'storeId', 'role']
        }
      });

      if (!users) {
        return res.status(404).json(response({ message: messages.no_users }, false));
      }

      return res.json(response({ users }));

    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  async update(req, res) {
    const { storeId, role } = req.user;

    if (role < ROLES.ADMIN) {
      return res.status(403).json(
        response({ message: messages.insufficient_privileges }, false)
      )
    }

    const updated = { ...req.body };
    const { id } = req.params;

    try {
      const [success] = await User.update(updated, { where: { id, storeId } });
      if (!success) {
        return res.status(404).json(
          response({ message: messages.no_user }, false)
        )
      }

      return res.json(response({ updatedValues: updated }));

    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

  async delete(req, res) {
    const { storeId, role } = req.user;
    const { id } = req.params;

    if (role < ROLES.ADMIN) {
      return res.status(403).json(
        response({ message: messages.insufficient_privileges }, false)
      )
    }

    try {
      const deleted = await User.destroy({ where: { storeId, id } });

      if (!deleted) {
        return res.status(404).json(response({ message: messages.no_user }, false));
      }

      return res.json(response({ id }));

    } catch (error) {
      return res.status(500).json(response({ error: error.toString() }, false));
    }
  }

}

module.exports = UserController;