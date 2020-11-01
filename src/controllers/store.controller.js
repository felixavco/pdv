const { Store, User } = require('../models');
const { ROLES, messages } = require('../config');
const { response, getJWT } = require('../utilities');

class StoreController {
  async create(req, res) {
    try {
      const {
        name,
        address,
        currency,
        nit,
        firstName,
        middleName,
        lastName,
        secondLastName,
        email,
        password
      } = req.body;

      const newStore = { name, address, currency, nit };
      const newUser = { firstName, middleName, lastName, secondLastName, email, password };

      let user = await User.findOne({ where: { email } });

      if (user) {
        return res.status(401).json(response(
          null,
          false,
          { message: messages.user_already_exist },
        ));
      }

      const store = await Store.create(newStore);

      if (store) {
        newUser.storeId = store.dataValues.id;
        newUser.role = ROLES.SUPER_ADMIN;
        user = await User.create(newUser);

        if (user) {
          const jwt = getJWT(user);
          return res.status(jwt.success ? 201 : 500).json(jwt);
        }
      }

    } catch (error) {
      return res.status(500).json(response(null, false, { error, message: error.toString() }));
    }

  }

}

module.exports = StoreController;