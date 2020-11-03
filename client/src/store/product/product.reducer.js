const initialState = {
  products: [],
  product: null,
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {

    case 'test':
      return { ...state, ...payload }

    default:
      return state
  }
}

export default reducer;
