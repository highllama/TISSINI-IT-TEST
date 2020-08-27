const initialData = {
  data: [],
};

//TYPES
const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const REMOVE_PRODUCT_FROM_CART='REMOVE_PRODUCT_FROM_CART'

//REDUCER

export default function cartReducer(state = initialData, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case REMOVE_PRODUCT_FROM_CART:
      return  {
        ...state,
        data: action.payload
      }
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

export const removeProductAction = (id) => (dispatch, getStore) => {
const data = getStore().cartReducer.data
const filter = data.filter(item => item.item._id !== id)
dispatch({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: filter
})
}

