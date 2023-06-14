import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginService } from "../../../../../business/service/client/Login.service";
import { LoginUserRequest } from "../../../../../business/domain/entities/request/client/loginUser/LoginUserRequest";

const loginService = new LoginService();

export const loginUser = createAsyncThunk(
  "post/client_login",
  async (user: LoginUserRequest) => {
    return await loginService.loginUser(user).then((response) => {
      return response;
    });
  }
);
