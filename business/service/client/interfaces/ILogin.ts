import { LoginUserRequest } from "../../../domain/entities/request/client/loginUser/LoginUserRequest";
import { LoginUserResponse } from "../../../domain/entities/response/client/loginUser/LoginUserResponse";


export interface ILoginService {
  saveToken(client: LoginUserResponse): void;
  loginUser(user: LoginUserRequest): Promise<boolean>;
}
