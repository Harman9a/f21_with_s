const initialState = {
  Cart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        Cart: [...state.Cart, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        Cart: state.Cart.filter(item => item.id !== action.payload),
      };
    case 'EMPTY_CART':
      return {
        ...state,
        Cart: [],
      };
    default:
      return state;
  }
};

export default CartReducer;
