import { combineReducers } from "@reduxjs/toolkit";
import * as Reducers from "./reducers/imports";

export const rootReducer = combineReducers({
  terms: Reducers.termsReducer,
  policies: Reducers.policiesReducer,
  loading: Reducers.loadingSlice,
  register: Reducers.registerReducer,
});
