import Axios from "axios";
import cookie from "react-cookies";

const initialData = {
  auth: cookie.select(/authToken/),
  user: {},
};

const BASE_URL = "http://localhost:3001/api/";

//TYPES
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const GET_USER_DATA = "GET_USER_DATA";
//REDUCER

export default function authReducer(state = initialData, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        auth: cookie.select(/authToken/),
      };
    case LOG_OUT_REQUEST:
      return {
        ...initialData,
      };
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

//ACTIONS
export const loginAction = (e) => async (dispatch, getState) => {
  try {
    console.log(e);
    const data = await Axios.post(`${BASE_URL}auth/login`, {
      phoneNumber: e,
    });
    if (data) {
      window.location.href = "/categorias";
      cookie.save("authToken", data.data.token);
      console.log(data);
    }
    dispatch({
      type: LOGIN_REQUEST,
      payload: data,
    });
  } catch (error) {
    console.log("err", error);
    cookie.remove("authToken");
    // alert("bad auth");
  }
};

export const logOutAction = () => (dispatch) => {
  cookie.remove("authToken");
  window.location.href = "/";
  dispatch({
    type: LOG_OUT_REQUEST,
    data: {},
  });
};

export const getUserDataAction = () => async (dispatch, getState) => {
  const token = getState().authReducer.auth.authToken;
  const data = await Axios.post(`${BASE_URL}user`, {
    jsToken: token,
  });
  if (data) {
    dispatch({
      type: GET_USER_DATA,
      payload: data.data,
    });
  }
  console.log(token);
};
