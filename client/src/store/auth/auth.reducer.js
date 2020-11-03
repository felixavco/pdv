import types from './auth.types';

const initialState = {
  isAuth: false,
  authUser: {},
  errors: []
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_AUTH_USER:
      return {
        ...state,
        isAuth: payload.isAuth,
        auth: payload.auth,
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
