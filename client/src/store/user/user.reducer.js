const initialState = {
  isAuth: false,
  auth: null,
  users: [],
  user: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'ts':
      return { ...state, ...payload }

    default:
      return state
  }
}
