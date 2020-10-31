const { Strategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const { User } = require('../models');
const { settings } = require('../config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: settings.SECRET,
};

function passportJWT(passport) {
  passport.use(
    new Strategy(options, async (jwtPayload, done) => {
      try {
        const user = await User.findByPk(jwtPayload.id);
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        console.error(error);
      }
    })
  )
}

module.exports = passportJWT;

