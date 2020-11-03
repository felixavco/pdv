import { urls } from '../../config';
import { API } from '../API';
import store from '../index';
import { tokenHandler, isEmpty } from '../../utilities'
import types from './auth.types';
const { dispatch } = store;

async function register(userData) {
  try {
    const { data } = await API.post(urls.store.create, userData);

    tokenHandler(data.token);

    const res = await API.get(urls.user.getAuth);

    dispatch(setUser(res.data.user));

  } catch (error) {
    dispatch(setError(error));
  }
}

async function login(authData) {
  try {
    const { data } = await API.post(urls.user.login, authData);

    tokenHandler(data.token);

    const res = await API.get(urls.user.getAuth);

    dispatch(setUser(res.data.user));

  } catch (error) {
    dispatch(setError(error));
  }
}

function logout() {
  tokenHandler(null);
  setUser({});
}

function setUser(user) {
  return {
    type: types.SET_AUTH_USER,
    payload: {
      isAuth: !isEmpty(user),
      auth: user,
    }
  }
}

function setError(error) {
  return {
    type: types.SET_ERROR,
    payload: { error },
  }
}

export const authActions = {
  register,
  login,
  logout,
}