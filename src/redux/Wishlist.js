const initialState = {
  WishList: [],
};

const WishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        WishList: [...state.WishList, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        WishList: state.WishList.filter(item => item.id !== action.payload),
      };
    case 'EMPTY_WishList':
      return {
        ...state,
        WishList: [],
      };
    default:
      return state;
  }
};

export default WishListReducer;
