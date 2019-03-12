const initialState = {
  array: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TEST_ACTION":
      return {
        ...state,
        array: [...state.array, action.payload]
      }
    
    default:
      return state;
  }
}