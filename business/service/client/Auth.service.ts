import { IAuthService } from "./interfaces/IAuth";
import { decryptData, encryptData } from "../../../utils/crypto";
import { AuthUserRequest } from "../../domain/entities/request/client/authUser/AuthUserRequest";
import { RefreshTokenRequest } from "../../domain/entities/request/client/refreshToken/RefreshTokenRequest";
import { AuthUserResponse } from "../../domain/entities/response/client/authUser/AuthUserResponse";
import { RefreshTokenResponse } from "../../domain/entities/response/client/refreshToken/RefreshTokenResponse";
import { httpPrivate, httpPublic } from "../../../config/axios";
import { callToast } from "../../../utils/toastCall";

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

  setUserLocalStorageAccess(userResponse: {
    message: string;
    accessToken: string;
    refreshToken: string;
    expiry: number;
    saveAccount: boolean;
  }): void {
    localStorage.setItem("encryptClient", encryptData(userResponse));
    this.setDefaultHeaderAuthorizationConfiguration(userResponse.accessToken);
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
            saveAccount: user.saveLogin,
          });
          this.setDefaultHeaderAuthorizationConfiguration(
            response.data.accessToken
          );
          const message = response.data.message;
          callToast(message, "success");
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
          this.setUserLocalStorageAccess(response.data);
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
