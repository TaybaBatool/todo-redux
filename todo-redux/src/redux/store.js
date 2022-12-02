import { configureStore } from "@reduxjs/toolkit";
import { reducerR } from "./reducer";

const store = configureStore({
  reducer: reducerR,
});
export default store;
