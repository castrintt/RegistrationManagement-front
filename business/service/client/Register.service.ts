import { Policies } from "@clientResponse/policies/policies";
import { Terms } from "@clientResponse/terms/terms";
import { IRegisterService } from "./interfaces/IRegister";
import { axiosInstances } from "@config/axios.instances";
import { CreateUserRequest } from "@clientRequest/registerUser/CreateUserRequest";
import { callToast } from "@utils/toastCall";
import { AxiosInstance } from "axios";

export class RegisterService implements IRegisterService {
  private _http: AxiosInstance = axiosInstances.public;

  async getTerms(): Promise<Terms> {
    return await this._http
      .get("/TermsOfUse/get_terms_the_last_published")
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        return null;
      })
      .catch(() => {
        return null;
      });
  }
  async getPolicies(): Promise<Policies> {
    return await this._http
      .get("/PrivacyPolicy/get_privacy_policy_the_last_published")
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        return null;
      })
      .catch(() => {
        return null;
      });
  }
  async clientRegister(client: CreateUserRequest): Promise<boolean> {
    return await this._http
      .post("/Client/client_register", client)
      .then((response) => {
        if (response.status === 200) {
          callToast("Registro completo!", "success");
          return response.data;
        }
        return false;
      })
      .catch((err) => {
        if (err) {
          callToast(err.response.data[0].value, "error");
        }
        return false;
      });
  }
}
