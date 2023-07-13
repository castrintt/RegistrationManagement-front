import {
  getEnvironmentUrl,
  conditionToValidateTimeThatUserIsLogged,
  localStorageAccessToken,
  verifyIfOneHourHavePast
} from "./axios.helpers";
import { AxiosBuilder } from "./axios.builder";
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
    const path: string = config.url ?? "";
    if (conditionToValidateTimeThatUserIsLogged()) {
      if (
        !path.includes("/Authentication/generate_access_token") &&
        !path.includes("/Authentication/update_access_token")
      ) {
        try {
          const authService = new AuthService();
          await authService.refreshToken(localStorageAccessToken());
        } catch (err) {
          console.log("Error", err);
        }
      }
      return config;
    } 

    if (verifyIfOneHourHavePast()) {
      const logoutServices = new LogoutService();
      logoutServices.logout();
      config.headers.Authorization = "";
      return config;
    }
     return config;
  });
};

createRequestInterceptorForAuthentication("private");
createRequestInterceptorForAuthentication("privateForFile");

export { axiosInstances };
