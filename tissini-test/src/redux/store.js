import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//REDUCERS

import authReducer from "./authDuck";
import cartReducer from './cartDuck'
import dataReducer from './dataDuck'

const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  dataReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function Store() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
