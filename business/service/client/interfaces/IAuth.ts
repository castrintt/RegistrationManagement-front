import { AuthUserRequest } from "../../../domain/entities/request/client/authUser/AuthUserRequest";
import { RefreshTokenRequest } from "../../../domain/entities/request/client/refreshToken/RefreshTokenRequest";
import { AuthUserResponse } from "../../../domain/entities/response/client/authUser/AuthUserResponse";
import { RefreshTokenResponse } from "../../../domain/entities/response/client/refreshToken/RefreshTokenResponse";

export interface IAuthService {
  checkAuthentication(): boolean;
  authUser(user: AuthUserRequest): Promise<AuthUserResponse>;
  refreshToken(access: RefreshTokenRequest): Promise<RefreshTokenResponse>;
}
