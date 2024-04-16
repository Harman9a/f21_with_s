const initialState = {
  WishList: [],
};

const WishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_TO_WISHLIST':
      return {
        ...state,
        WishList: [...state.WishList, action.payload],
      };
    case 'REMOVE_WISHLIST_ITEM':
      return {
        ...state,
        WishList: state.WishList.filter(item => item.id !== action.payload),
      };
    case 'EMPTY_WISHLIST':
      return {
        ...state,
        WishList: [],
      };
    default:
      return state;
  }
};

export default WishListReducer;
