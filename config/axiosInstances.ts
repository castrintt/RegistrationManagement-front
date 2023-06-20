import axios from "axios";
import * as AXIOS_HELPERS from "./axiosHelpers";
import { AuthService } from "../business/service/client/Auth.service";
import { LogoutService } from "../business/service/client/Logout.service";

const httpPublic = axios.create({
  baseURL: AXIOS_HELPERS.getEnvironmentUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

const httpPrivate = axios.create({
  baseURL: AXIOS_HELPERS.getEnvironmentUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

httpPrivate.interceptors.request.use(async (config) => {
  if (AXIOS_HELPERS.conditionToValidateTimeThatUserIsLogged()) {
    try {
      const authService = new AuthService();
      await authService.refreshToken(AXIOS_HELPERS.localStorageAccessToken());
      const token = AXIOS_HELPERS.localStorageBearerToken();
      config.headers.Authorization = token;
    } catch (err) {
      console.log("Error", err);
    }
    return config;
  } else {
    const logoutServices = new LogoutService();
    logoutServices.logout();
    config.headers.Authorization = "";
    return config;
  }
});

httpPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      //
    }
    return Promise.reject(error);
  }
);

export { httpPublic, httpPrivate };
