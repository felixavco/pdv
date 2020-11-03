import types from './user.types';

const initialState = {
  isAuth: false,
  auth: null,
  users: [],
  user: {},
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REGISTER:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default reducer;
