import {
  getEnvironmentUrl,
  conditionToValidateTimeThatUserIsLogged,
  localStorageAccessToken,
  localStorageBearerToken,
} from "./axiosHelpers";
import { AxiosBuilder } from "./builder";
import { AuthService } from "../business/service/client/Auth.service";
import { LogoutService } from "../business/service/client/Logout.service";

const axiosInstances = {
  public: AxiosBuilder.create()
    .withUrl(getEnvironmentUrl())
    .toDomain()
    .initInstance(),
  private: AxiosBuilder.create()
    .withUrl(getEnvironmentUrl())
    .haveCredentials()
    .toDomain()
    .initInstance(),
  privateForFile: AxiosBuilder.create()
    .withUrl(getEnvironmentUrl())
    .withHeaders({
      "Content-Type": "multipart/form-data",
    })
    .haveCredentials()
    .toDomain()
    .initInstance(),
};

type MappedInstances = keyof typeof axiosInstances;

const createRequestInterceptorForAuthentication = (
  instance: MappedInstances
) => {
  return axiosInstances[instance].interceptors.request.use(async (config) => {
    if (conditionToValidateTimeThatUserIsLogged()) {
      try {
        const authService = new AuthService();
        await authService.refreshToken(localStorageAccessToken());
        const token = localStorageBearerToken();
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
};

createRequestInterceptorForAuthentication("private");
createRequestInterceptorForAuthentication("privateForFile");

export { axiosInstances };
