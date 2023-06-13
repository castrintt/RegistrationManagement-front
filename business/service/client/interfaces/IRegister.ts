import { Policies } from "../../../domain/entities/response/policies/policies";
import { Terms } from "../../../domain/entities/response/terms/terms";
import { CreateUserRequest } from "../../../domain/entities/request/CreateUserRequest";

export interface IRegisterService {
  getTerms(): Promise<Terms>;
  getPolicies(): Promise<Policies>;
  clientRegister(client: CreateUserRequest): Promise<boolean>;
}
