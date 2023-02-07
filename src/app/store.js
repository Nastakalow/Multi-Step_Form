import { configureStore } from "@reduxjs/toolkit";
import multistepFormReducer from "../features/multistep-form/multistepFormSlice";

export const store = configureStore({
  reducer: {
    multistepForm: multistepFormReducer,
  },
});
