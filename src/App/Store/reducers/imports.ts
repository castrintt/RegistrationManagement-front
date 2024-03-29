import termsReducer from "./register/terms/reducers";
import policiesReducer from "./register/policies/reducers";
import loadingSlice from "./loading/loadingSlice";
import registerReducer from "./register/newUser/reducer";
import authClientReducer from "./authClient/reducer";

export {
  termsReducer,
  policiesReducer,
  loadingSlice,
  registerReducer,
  authClientReducer as loginReducer,
};
