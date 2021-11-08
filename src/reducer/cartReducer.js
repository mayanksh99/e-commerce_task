const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { cart: [...state.cart, action.data] };

    default:
      return state;
  }
};

export default reducer;
