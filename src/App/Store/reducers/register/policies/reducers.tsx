import { createSlice } from "@reduxjs/toolkit";
import { Terms } from "../../../../../../business/domain/entities/response/terms/terms";
import { fetchPolicies } from "./actions";

export type InitialState = {
  data: Terms;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  data: {
    policyDescription: "",
    editorSettings: null,
    publishedDate: new Date(),
  },
  loading: false,
  error: null,
};

const policiesReducer = createSlice({
  name: "policiesReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPolicies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPolicies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPolicies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export default policiesReducer.reducer;
