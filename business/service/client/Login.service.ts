import { ILoginService } from "./interfaces/ILogin";
import { httpPublic } from "../../../config/axios";
import { LoginUserRequest } from "../../domain/entities/request/client/loginUser/LoginUserRequest";
import { LoginUserResponse } from "../../domain/entities/response/client/loginUser/LoginUserResponse";
import { callToast } from "../../../utils/toastCall";
import { encryptData } from "../../../utils/crypto";
import { AxiosInstance } from "axios";

export class LoginService implements ILoginService {
  private _http: AxiosInstance = httpPublic;

  saveToken(client: LoginUserResponse): void {
    localStorage.setItem("client", encryptData(client));
  }

  async loginUser(user: LoginUserRequest): Promise<boolean> {
    return await this._http
      .post<LoginUserResponse>("/Client/client_login", {
        login: user.login,
        password: user.password,
      })
      .then((response) => {
        if (response.status === 200 && response.data) {
          this.saveToken(response.data);
          return true;
        }
        return false;
      })
      .catch((err) => {
        if (err) {
          const errorMessage = err.response.data[0].value;
          callToast(errorMessage, "error");
        }
        return false;
      });
  }
}
