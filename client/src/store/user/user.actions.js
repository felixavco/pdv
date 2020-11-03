import { urls } from '../../config';
import { API } from '../API';
import types from './user.types';
import store from '../index';
import { tokenHandler } from '../../utilities'
const { dispatch } = store;

async function register(userData) {
  try {
    const { data } = await API.post(urls.store.create, userData);
    tokenHandler(data.token);

    const response = await API.get(urls.user.getAuth);

    dispatch({
      type: types.SET_AUTH_USER,
      payload: {
        isAuth: true,
        auth: response.data.data.user,
      }
    });

  } catch (error) {
    dispatch({
      type: types.SET_ERROR,
      payload: { error },
    })
  }
}

export const userActions = {
  register
}