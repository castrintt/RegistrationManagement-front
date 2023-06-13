import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterService } from "../../../../../../business/service/client/Register.service";
import { CreateUserRequest } from "../../../../../../business/domain/entities/request/CreateUserRequest";

const registerService = new RegisterService();

export const createUser = createAsyncThunk(
  "get/policies",
  async (client: CreateUserRequest) => {
    return await registerService.clientRegister(client).then((response) => {
      if (response) {
        return true;
      }
      return false;
    });
  }
);
