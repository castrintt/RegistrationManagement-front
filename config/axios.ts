import axios from "axios";
import { devEnvironment } from "../environments/dev";
// import { prodEnvironment } from "../environments/prod";
import { decryptData } from "../utils/crypto";
import { AuthService } from "../business/service/client/Auth.service";
import { RefreshTokenRequest } from "../business/domain/entities/request/client/refreshToken/RefreshTokenRequest";

const getEnvironmentUrl = () => {
  return devEnvironment.baseUrl;
  // return prodEnvironment.baseUrl;
};

const localStorageBearerToken = (): string => {
  const userLocalInfoEncrypted = localStorage.getItem("encryptClient") ?? null;
  if (userLocalInfoEncrypted) {
    const decrypt = decryptData(userLocalInfoEncrypted)["accessToken"];
    return `Bearer ${decrypt}`;
  }
  return "Bearer";
};

const localStorageAccessToken = (): RefreshTokenRequest => {
  const userLocalInfoEncrypted = localStorage.getItem("encryptClient") ?? null;
  if (userLocalInfoEncrypted) {
    const decrypt = decryptData(userLocalInfoEncrypted);
    return {
      accessToken: decrypt["accessToken"],
      refreshToken: decrypt["refreshToken"],
    };
  }
  return {
    accessToken: "",
    refreshToken: "",
  };
};

const httpPublic = axios.create({
  baseURL: getEnvironmentUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

const httpPrivate = axios.create({
  baseURL: getEnvironmentUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

httpPrivate.interceptors.request.use(
  (config) => {
    const token = localStorageBearerToken();
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const originalConfig = err.config;
    if (
      err.response &&
      err.response.data[0].value === "Token inválido." &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;
      try {
        const authService = new AuthService();
        await authService.refreshToken(localStorageAccessToken());
        return httpPrivate(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    if (err.response.status === 403 && err.response.data) {
      return Promise.reject(err.response.data);
    }
  }
);

export { httpPublic, httpPrivate };
