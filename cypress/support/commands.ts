import { CreateUserRequest } from "../../business/domain/entities/request/client/registerUser/CreateUserRequest";

type RegisterCall = {
  method: "POST" | "PUT" | "DELETE" | "GET";
  path: string;
  alias: string;
};

Cypress.Commands.add("interceptCall", (call: RegisterCall) => {
  cy.intercept(call.method, call.path).as(call.alias);
});

Cypress.Commands.add("getInterpolation", (dataCy: string) => {
  cy.get(`[data-cy="${dataCy}"]`);
});

Cypress.Commands.add("registerDataFlux", (user: CreateUserRequest) => {
  cy.getInterpolation("email-input")
    .should("be.visible")
    .should("have.value", "")
    .type(user.login);
  cy.getInterpolation("password-input")
    .should("be.visible")
    .should("have.value", "")
    .type(user.userPassword.password);
  cy.getInterpolation("confirm-password-input")
    .should("be.visible")
    .should("have.value", "")
    .type(user.userPassword.passwordConfirm);
  cy.getInterpolation("terms-checkbox")
    .should("be.visible")
    .should("be.not.checked");
  if (user.acceptTermsAndPolicies) {
    cy.getInterpolation("terms-checkbox").check();
  }
  cy.getInterpolation("market-area-checkbox")
    .should("be.visible")
    .should("be.not.checked");
  if (user.acceptNotification) {
    cy.get("market-area-checkbox").check();
  }
});
