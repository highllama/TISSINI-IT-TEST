import Axios from "axios";

const initialData = {
  data: [],
};

const BASE_URL = "http://localhost:3001";

//TYPES
const GET_PRODUCTS = "GET_PRODUCTS";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
//REDUCER

export default function dataReducer(state = initialData, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

//ACTIONS

export const getData = () => async (dispatch) => {
  //   const data= await Axios.get(`${BASE_URL}/api/products`)
  //   console.log(data)
  fetch(`${BASE_URL}/api/products`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};
