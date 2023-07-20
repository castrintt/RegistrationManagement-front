import { ILogoutService } from "./interfaces/ILogout";

export class LogoutService implements ILogoutService {
  logout(): void {
    localStorage.removeItem("encryptClient");
   
  }
}
