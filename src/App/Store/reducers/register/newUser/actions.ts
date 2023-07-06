import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterService } from "@clientService/Register.service";
import { CreateUserRequest } from "@clientRequest/registerUser/CreateUserRequest";

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
