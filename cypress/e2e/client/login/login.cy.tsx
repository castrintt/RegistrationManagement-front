/// <reference types="Cypress" />
import * as MOCK from "./login__mock__";

describe("LOGIN", () => {
  beforeEach(() => {
    cy.visit("/client/login");
  });

  context("Success", () => {
    it("should render", () => {
      cy.getInterpolation("container").should("be.visible");
    });

    it("should be able to type into inputs", () => {
      cy.getInterpolation("email-input")
        .should("be.visible")
        .should("be.enabled")
        .type("123")
        .should("have.value", "123");
      cy.getInterpolation("password-input")
        .should("be.visible")
        .should("be.enabled")
        .type("123")
        .should("have.value", "123");
      cy.getInterpolation("save-login")
        .should("be.visible")
        .should("be.enabled")
        .click()
        .should("be.checked");
      cy.contains("entrar").should("be.visible").should("be.enabled");
    });

    it("should render an image if the width is higher than 850px", () => {
      cy.viewport(900, 650);
      cy.getInterpolation("image-container").should("be.visible");
    });

    it("should not render an image if the width is lower than 850px", () => {
      cy.viewport(800, 650);
      cy.getInterpolation("image-container").should("not.be.visible");
    });

    it("should navigate to client/home for a successful login attempt", () => {
      cy.getInterpolation("email-input").type(MOCK.successLoginAttempt.login);
      cy.getInterpolation("password-input").type(
        MOCK.successLoginAttempt.password
      );
      cy.interceptCall({
        method: "POST",
        path: "**/Authentication/**",
        alias: "loginClient",
      });
      cy.contains("entrar").should("be.visible").should("be.enabled").click();
      cy.wait("@loginClient");
      cy.location("pathname").should("be.eq", "/client/home");
      cy.contains(MOCK.successAttemptMessage).should("be.visible");
    });

    it('should navigate to register if click in "clique aqui"', () => {
      cy.contains("clique aqui").click();
      cy.location("pathname").should("be.eq", "/client/register");
    });

    it("should set in localStorage the attribute encryptClient", () => {
      cy.getInterpolation("email-input").type(MOCK.successLoginAttempt.login);
      cy.getInterpolation("password-input").type(
        MOCK.successLoginAttempt.password
      );
      cy.contains("entrar").should("be.visible").should("be.enabled").click();
      cy.location("pathname").should("be.eq", "/client/home");
      cy.contains(MOCK.successAttemptMessage).should("be.visible");
      cy.window().then((win) => {
        expect(win.localStorage.getItem("encryptClient")).not.to.be.null;
      });
    });
  });
  context("Error", () => {
    it("should return a message for a invalid login attempt", () => {
      cy.getInterpolation("email-input").type(MOCK.randomLoginAttempt.login);
      cy.getInterpolation("password-input").type(
        MOCK.randomLoginAttempt.password
      );
      cy.contains("entrar").should("be.visible").should("be.enabled").click();
      cy.contains(MOCK.invalidAttemptMessage).should("be.visible");
    });

    it("should focus on email if try to login with an invalid email", () => {
      cy.getInterpolation("email-input").type(MOCK.invalidLoginAttempt.login);
      cy.getInterpolation("password-input").type(
        MOCK.invalidLoginAttempt.password
      );
      cy.contains("entrar").should("be.visible").should("be.enabled").click();
      cy.getInterpolation("email-input").should("be.focused");
    });

    it("should focus on password  if try to login with an invalid email", () => {
      cy.getInterpolation("email-input").type(MOCK.successLoginAttempt.login);
      cy.contains("entrar").should("be.visible").should("be.enabled").click();
      cy.contains(MOCK.invalidAttemptMessage).should("be.visible");
    });
  });
});
