import { IAuthService } from "./interfaces/IAuth";
import { decryptData } from "../../../utils/crypto";

export class AuthService implements IAuthService {
  checkAuthentication(): boolean {
    const localToken = localStorage.getItem("client");
    if (localToken) {
      return !!decryptData(localToken);
    }
    return false;
  }
}
