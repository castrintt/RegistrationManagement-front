import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./actions";

type InitialState = {
  confirmCreateUser: boolean;
  error: string | null;
  loading: boolean;
};

const initialState: InitialState = {
  confirmCreateUser: false,
  error: null,
  loading: false,
};

const registerReducer = createSlice({
  name: "registerReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createUser.fulfilled, (state) => {
      state.confirmCreateUser = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export default registerReducer.reducer;
