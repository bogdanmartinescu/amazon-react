export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state = initialState, action) => {
  // console.log(action.payload, 12313);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    default:
      return state;
  }
};
z