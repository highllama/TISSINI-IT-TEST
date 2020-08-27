const initialData = {
  data: [],
};

//TYPES
const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

//REDUCER

export default function cartReducer(state = initialData, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}

//ACTIONS

export const addProductAction = (item, size, count) => (dispatch) => {
  console.log(item, size, count);
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: { item, size, count }
  })
};
