import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isLoading: boolean;
};

const initialState: InitialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    loadingState(state, { payload }: PayloadAction<"initialize" | "cancel">) {
      const loadingStateManagement = {
        initialize: true,
        cancel: false,
      };

      state.isLoading = loadingStateManagement[payload];
    },
  },
});

export const { loadingState } = loadingSlice.actions;
export default loadingSlice.reducer;
