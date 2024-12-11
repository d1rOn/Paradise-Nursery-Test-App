import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cart";

export const rootReducer = combineReducers({
  cart: cartReducer,
});