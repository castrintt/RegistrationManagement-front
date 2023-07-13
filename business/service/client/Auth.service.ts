import { IAuthService } from "./interfaces/IAuth";
import { decryptData, encryptData } from "@utils/crypto";
import { AuthUserRequest } from "@clientRequest/authUser/AuthUserRequest";
import { RefreshTokenRequest } from "@clientRequest/refreshToken/RefreshTokenRequest";
import { AuthUserResponse } from "@clientResponse/authUser/AuthUserResponse";
import { RefreshTokenResponse } from "@clientResponse/refreshToken/RefreshTokenResponse";
import { axiosInstances } from "@config/axios.instances";
import { callToast } from "@utils/toastCall";

type LocalStorageSetter = {
  message: string;
  accessToken: string;
  refreshToken: string;
  expiry: number;
  loginAttempt: Date;
};
export class AuthService implements IAuthService {
  private _httpPublic = axiosInstances.public;
  private _httpPrivate = axiosInstances.private;

  async authUser(user: AuthUserRequest): Promise<AuthUserResponse> {
    return await this._httpPublic
      .post("/Authentication/generate_access_token", {
        login: user.login,
        password: user.password,
      })
      .then((response) => {
        if (response.status === 200 && response.data) {
          const serverResponse = response.data;
          const message = response.data.message;
          if (message.includes("autenticado com sucesso")) {
            callToast(message, "success");
          } else {
            callToast(message, "error");
          }
          this.setUserLocalStorageAccess({
            ...serverResponse,
            loginAttempt: new Date(),
          });
          this.setDefaultHeaderAuthorizationConfiguration(
            serverResponse.accessToken
          );
          return serverResponse;
        }
        return null;
      })
      .catch((err) => {
        if (err) {
          const message = err.response.data[0].value;
          callToast(message, "error");
        }
        return null;
      });
  }

  async refreshToken(
    access: RefreshTokenRequest
  ): Promise<RefreshTokenResponse> {
    return await this._httpPrivate
      .post("/Authentication/update_access_token", access)
      .then((response) => {
        if (response.status === 200 && response.data) {
          this.setUserLocalStorageAccess({
            ...response.data,
            loginAttempt: new Date(),
          });
          this.setDefaultHeaderAuthorizationConfiguration(
            response.data.accessToken
          );
          return response.data;
        }
        return null;
      });
  }

  private setDefaultHeaderAuthorizationConfiguration(
    accessToken: string
  ): void {
    axiosInstances.private.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    axiosInstances.privateForFile.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  private setUserLocalStorageAccess(userResponse: LocalStorageSetter): void {
    localStorage.setItem("encryptClient", encryptData(userResponse));
  }

  checkAuthentication(): boolean {
    const localToken = localStorage.getItem("encryptClient");
    if (localToken) {
      return !!decryptData(localToken)["accessToken"];
    }
    return false;
  }
}
