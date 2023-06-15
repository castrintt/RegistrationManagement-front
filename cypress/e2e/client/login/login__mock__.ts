import { faker } from "@faker-js/faker";
import { AuthUserRequest } from "../../../../business/domain/entities/request/client/authUser/AuthUserRequest";

const randomEmail = faker.internet.email();
const randomPassword = faker.string.alpha({ length: { min: 8, max: 20 } });

const successLoginAttempt: AuthUserRequest = {
  login: "igor@gmail.com",
  password: "113644Abe!",
  saveLogin: false,
};
const randomLoginAttempt: AuthUserRequest = {
  login: randomEmail,
  password: randomPassword,
  saveLogin: false,
};

const successAttemptMessage = "autenticado com sucesso.";
const invalidAttemptMessage = "Login ou senha inválido.";

export {
  successLoginAttempt,
  randomLoginAttempt,
  successAttemptMessage,
  invalidAttemptMessage,
};
