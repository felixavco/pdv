const { settings } = require('../config');
const jwt = require('jsonwebtoken');

function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    value.size === 0 ||
    value.length === 0 ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}

function response(data, success = true, options = {}) {
  return {
    data,
    success,
    ...options,
  }
}

function getJWT(user) {
  try {
    const { id, storeId, role } = user;
    const payload = { id, storeId, role };
    const token = jwt.sign(payload, settings.SECRET, { expiresIn: '12h' });
    return response(`Bearer ${token}`);
  } catch (error) {
    return response(null, false, { error });
  }
}

module.exports = {
  isEmpty,
  getJWT,
  response,
}