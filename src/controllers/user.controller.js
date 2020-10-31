const { User } = require('../models');

class UserController {

  create(req, res) {
    const {
      email,
      lastName,
      password,
      firstName,
      middleName,
      secondLastName,
    } = req.body;


    res.send('OK')

  }

}

module.exports = UserController;