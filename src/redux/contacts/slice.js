import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContact1, deleteContact1 } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addContact1.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact1.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact1.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact1.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact1.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContact1.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      }),
});

export default contactsSlice.reducer;
