import { createSlice } from "@reduxjs/toolkit";
import { authClient } from "./actions";

type InitialState = {
  error: string | null;
  loading: boolean;
};

const initialState: InitialState = {
  error: null,
  loading: false,
};

const authClientReducer = createSlice({
  name: "authClientReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authClient.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(authClient.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(authClient.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export default authClientReducer.reducer;
