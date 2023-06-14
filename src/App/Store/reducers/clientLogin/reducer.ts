import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./actions";

type InitialState = {
  error: string | null;
  loading: boolean;
};

const initialState: InitialState = {
  error: null,
  loading: false,
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export default loginReducer.reducer;
