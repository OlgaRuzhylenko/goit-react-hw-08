import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contacts/slice";
import { filterReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
