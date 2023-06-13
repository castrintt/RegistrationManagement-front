import { createSlice } from "@reduxjs/toolkit";
import { Terms } from "../../../../../../business/domain/entities/response/terms/terms";
import { fetchTerms } from "./actions";

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

const termsReducer = createSlice({
  name: "termsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTerms.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTerms.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTerms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export default termsReducer.reducer;
