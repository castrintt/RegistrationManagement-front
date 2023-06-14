import { ILogoutService } from "./interfaces/ILogout";

export class LogoutService implements ILogoutService {
  logout(): string {
    localStorage.removeItem("client");
    return "/login";
  }
}
