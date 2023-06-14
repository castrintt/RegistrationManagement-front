import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../../../business/service/client/Auth.service";
import { AuthUserRequest } from "../../../../../business/domain/entities/request/client/authUser/AuthUserRequest";

const authService = new AuthService();

export const authClient = createAsyncThunk(
  "post/client_login",
  async (user: AuthUserRequest) => {
    return await authService.authUser(user).then((response) => {
      return response;
    });
  }
);
