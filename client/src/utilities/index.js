
import axios from 'axios';
const tokenKey = 'accessToken';

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

function tokenHandler(token = undefined) {
  try {
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
      localStorage.setItem(tokenKey, token);
    } else {
      localStorage.removeItem(tokenKey);
      delete axios.defaults.headers.common['Authorization'];
    }
  } catch (error) {
    console.error(error);
  }
}


export {
  isEmpty,
  tokenHandler,
}