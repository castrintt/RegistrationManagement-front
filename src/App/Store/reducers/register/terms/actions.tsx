import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterService } from "@clientService/Register.service";

const registerService = new RegisterService();

export const fetchTerms = createAsyncThunk("get/terms", async () => {
  return await registerService.getTerms();
});
