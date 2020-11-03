import { urls } from '../../config';
import { API } from '../API';
import types from './user.types';
import store from '../index';
const { dispatch } = store;

async function getList(params) {
  try {
    const { data } = await API.get(urls.user.base(), params);

    dispatch({
      type: types.SET_USERS,
      payload: { users: data.users }
    });

  } catch (error) {
    dispatch(setError(error));
  }
}

async function getOne(id) {
  try {
    const { data } = await API.get(urls.user.base(id));

    dispatch({
      type: types.SET_USER,
      payload: { users: data.user }
    });

  } catch (error) {
    dispatch(setError(error));
  }
}

function setError(error) {
  return {
    type: types.SET_ERROR,
    payload: { error },
  }
}

export const userActions = {
  getList,
  getOne,
}