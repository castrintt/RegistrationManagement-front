import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterService } from "../../../../../../business/service/client/Register.service";

const registerService = new RegisterService();

export const fetchPolicies = createAsyncThunk("get/policies", async () => {
  return await registerService.getPolicies();
});
