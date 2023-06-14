import { faker } from "@faker-js/faker";
import { CreateUserRequest } from "../../../business/domain/entities/request/CreateUserRequest";

const randomEmail = faker.internet.email();
const randomEmailComponentTesting = faker.internet.email();
const randomPassword = faker.string.alpha({ length: { min: 8, max: 20 } });

const successAttempt: CreateUserRequest = {
  login: randomEmail,
  userPassword: {
    password: randomPassword,
    passwordConfirm: randomPassword,
  },
  acceptNotification: false,
  acceptTermsAndPolicies: true,
  registrationDate: new Date(),
};
const alreadyRegisterAttempt: CreateUserRequest = {
  login: "igor@gmail.com",
  userPassword: {
    password: "113644Abe!",
    passwordConfirm: "113644Abe!",
  },
  acceptNotification: false,
  acceptTermsAndPolicies: true,
  registrationDate: new Date(),
};
const withoutTermsAttempt: CreateUserRequest = {
  login: "igodar@gmail.com",
  userPassword: {
    password: "11ss3644Abe!",
    passwordConfirm: "11ss3644Abe!",
  },
  acceptNotification: false,
  acceptTermsAndPolicies: false,
  registrationDate: new Date(),
};
const invalidEmailAttempt: CreateUserRequest = {
  login: "Igor",
  userPassword: {
    password: "11ss3644Abe!",
    passwordConfirm: "11ss3644Abe!",
  },
  acceptNotification: false,
  acceptTermsAndPolicies: true,
  registrationDate: new Date(),
};
const confirmPasswordDoesNotMatchToPasswordAttempt: CreateUserRequest = {
  login: "igorasdasdsa@gmail.com",
  userPassword: {
    password: "113644Abe!",
    passwordConfirm: "11ss3644Abe!",
  },
  acceptNotification: false,
  acceptTermsAndPolicies: true,
  registrationDate: new Date(),
};
const newRegisterAttempt: CreateUserRequest = {
  login: randomEmailComponentTesting,
  userPassword: {
    password: randomPassword,
    passwordConfirm: randomPassword,
  },
  acceptNotification: false,
  acceptTermsAndPolicies: true,
  registrationDate: new Date(),
};
const alreadyRegisterAttemptExpectedResponse =
  "Este Login já possui um registro no sistema.";
const withoutTermsAttemptExpectedResponse =
  "Aceite dos termos e políticas. obrigatório.";
const invalidEmailAttemptExpectedResponse =
  "Campo permite entre {MinLength} e {MaxLength} caracteres.";
const passwordMatchAttemptExpectedResponse =
  "Confirmação não confere com a senha.";


export {
  successAttempt,
  alreadyRegisterAttempt,
  withoutTermsAttempt,
  invalidEmailAttempt,
  confirmPasswordDoesNotMatchToPasswordAttempt,
  alreadyRegisterAttemptExpectedResponse,
  withoutTermsAttemptExpectedResponse,
  invalidEmailAttemptExpectedResponse,
  passwordMatchAttemptExpectedResponse,
  newRegisterAttempt,
};
