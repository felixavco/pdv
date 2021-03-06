import types from './user.types';

const initialState = {
  users: [],
  user: {},
  errors: []
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {

    case types.SET_USERS:
      return {
        ...state,
        users: payload.users,
      }

    case types.SET_USER:
      return {
        ...state,
        user: payload.user,
      }

    case types.SET_ERROR:
      return {
        ...state,
        errors: [...state.errors, payload.error],
      }

    default:
      return state
  }
}

export default reducer;
