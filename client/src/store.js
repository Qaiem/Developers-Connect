import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  // ✅ no need to add thunk manually, it's already included by default
  preloadedState: {},
});

export default store;
