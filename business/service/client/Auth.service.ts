import { IAuthService } from "./interfaces/IAuth";
import { decryptData, encryptData } from "../../../utils/crypto";
import { AuthUserRequest } from "../../domain/entities/request/client/authUser/AuthUserRequest";
import { RefreshTokenRequest } from "../../domain/entities/request/client/refreshToken/RefreshTokenRequest";
import { AuthUserResponse } from "../../domain/entities/response/client/authUser/AuthUserResponse";
import { RefreshTokenResponse } from "../../domain/entities/response/client/refreshToken/RefreshTokenResponse";
import { httpPrivate, httpPublic } from "../../../config/axiosInstances";
import { callToast } from "../../../utils/toastCall";

type LocalStorageSetter = {
  message: string;
  accessToken: string;
  refreshToken: string;
  expiry: number;
  loginAttempt: Date;
};
export class AuthService implements IAuthService {
  private _httpPublic = httpPublic;

  checkAuthentication(): boolean {
    const localToken = localStorage.getItem("encryptClient");
    if (localToken) {
      return !!decryptData(localToken)["accessToken"];
    }
    return false;
  }

  setDefaultHeaderAuthorizationConfiguration(accessToken: string): void {
    httpPrivate.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  setUserLocalStorageAccess(userResponse: LocalStorageSetter): void {
    localStorage.setItem("encryptClient", encryptData(userResponse));
  }

   async authUser(user: AuthUserRequest): Promise<AuthUserResponse> {
    return await this._httpPublic
      .post("/Authentication/generate_access_token", {
        login: user.login,
        password: user.password,
      })
      .then((response) => {
        if (response.status === 200 && response.data) {
          this.setUserLocalStorageAccess({
            ...response.data,
            loginAttempt: new Date(),
          });
          this.setDefaultHeaderAuthorizationConfiguration(
            response.data.accessToken
          );
          const message = response.data.message;
          if (message.includes("autenticado com sucesso")) {
            callToast(message, "success");
          } else {
            callToast(message, "error");
          }
          return response.data;
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
    return await this._httpPublic
      .post("/Authentication/update_acess_token", access)
      .then((response) => {
        if (response.status === 200 && response.data) {
          this.setUserLocalStorageAccess({
            ...response.data,
            loginAttempt: new Date(),
          });
          return response.data;
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
}
