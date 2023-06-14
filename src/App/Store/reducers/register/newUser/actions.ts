import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterService } from "../../../../../../business/service/client/Register.service";
import { CreateUserRequest } from "../../../../../../business/domain/entities/request/client/registerUser/CreateUserRequest";

const registerService = new RegisterService();

export const createUser = createAsyncThunk(
  "post/register_client",
  async (client: CreateUserRequest) => {
    return await registerService.clientRegister(client).then((response) => {
      if (response) {
        return true;
      }
      return false;
    });
  }
);
