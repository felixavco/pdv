import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/api';
axios.defaults.headers.common['Authorization'] = localStorage.accessToken;
axios.defaults.headers.post['Content-Type'] = 'application/json';

async function get(url, params = {}) {
  try {
    return await axios(url, { params });
  } catch (error) {
    return onError(error);
  }
}

async function post(url, data) {
  try {
    return await axios.post(url, data);
  } catch (error) {
    return onError(error);
  }
}

async function put(url, data, params = {}) {
  try {
    return await axios.put(url, data, { params });
  } catch (error) {
    return onError(error);
  }
}

async function _delete(url, params) {
  try {
    return await axios.delete(url, { params });
  } catch (error) {
    return onError(error);
  }
}

function onError(error) {
  console.error(error.toString())
  return error;
}

export const API = {
  get,
  post,
  put,
  delete: _delete,
}