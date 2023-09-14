// importing the configureStore from reduxjs toolkit
//  to configure the store in order to store the state
import { configureStore } from "@reduxjs/toolkit";

// importing the bankReducer
import todoReducer from "./todo";

export default configureStore({
  // reducer
  reducer: {
    todo: todoReducer,
  },
});
