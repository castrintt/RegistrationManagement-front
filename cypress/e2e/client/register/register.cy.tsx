/// <reference types="Cypress" />
import * as MOCK from "./register__mock__";

describe("REGISTER", () => {
  describe("COMPONENT TESTING", () => {
    beforeEach(() => {
      cy.visit("/client/register");
    });

    describe("SUCCESS CASES", () => {
      it("should render", () => {
        cy.getInterpolation("register-container").should("be.visible");
      });

      it("should be able to type or check all inputs", () => {
        cy.registerDataFlux(MOCK.alreadyRegisterAttempt);
      });

      it('should appear "Registro completo!" for a successful register attempts', () => {
        cy.interceptCall({
          method: "POST",
          path: "**/Client/client_register",
          alias: "clientRegister",
        });
        cy.registerDataFlux(MOCK.newRegisterAttempt);
        cy.contains("registrar")
          .should("have.text", "registrar")
          .should("be.visible")
          .should("be.enabled")
          .click();
        cy.wait("@clientRegister");
        cy.contains("Registro completo!").should("be.visible");
        cy.location("pathname").should("be.eq", "/client/login");
      });

      it('should open terms modal if click in "Termos de uso"', () => {
        cy.interceptCall({
          method: "GET",
          path: "**/TermsOfUse/**",
          alias: "termsModal",
        });
        cy.getInterpolation("terms-modal-button")
          .should("be.visible")
          .should("have.text", "Termo de uso")
          .click();
        cy.wait("@termsModal");
        cy.getInterpolation("terms-modal").should("be.visible");
        cy.getInterpolation("terms-modal-title")
          .should("be.visible")
          .should("have.text", "Termos de uso");

        cy.getInterpolation("close-icon-terms").should("be.visible").click();

        cy.getInterpolation("terms-modal").should("not.be.visible");
      });

      it('should open policies modal if click in "Politicas de privacidade"', () => {
        cy.interceptCall({
          method: "GET",
          path: "**/PrivacyPolicy/**",
          alias: "policiesModal",
        });
        cy.getInterpolation("policies-modal-button")
          .should("be.visible")
          .should("have.text", "Politicas de privacidade")
          .click();
        cy.wait("@policiesModal");
        cy.getInterpolation("policies-modal").should("be.visible");
        cy.getInterpolation("policies-modal-title")
          .should("be.visible")
          .should("have.text", "Politicas de privacidade");
        cy.getInterpolation("close-icon-policies").should("be.visible").click();
        cy.getInterpolation("policies-modal").should("not.be.visible");
      });

      it("should not render the sidebar, if the screen width is bellow 700", () => {
        cy.viewport(699, 600);
        cy.getInterpolation("sidebar").should("not.be.visible");
        cy.viewport(600, 600);
        cy.getInterpolation("sidebar").should("not.be.visible");
        cy.viewport(500, 600);
        cy.getInterpolation("sidebar").should("not.be.visible");
        cy.viewport(400, 600);
        cy.getInterpolation("sidebar").should("not.be.visible");
        cy.viewport(300, 600);
        cy.getInterpolation("sidebar").should("not.be.visible");
      });

      it("should render the sidebar if the screen width is above 700", () => {
        cy.viewport(700, 600);
        cy.getInterpolation("sidebar").should("be.visible");
        cy.viewport(800, 600);
        cy.getInterpolation("sidebar").should("be.visible");
        cy.viewport(900, 600);
        cy.getInterpolation("sidebar").should("be.visible");
        cy.viewport(1000, 600);
        cy.getInterpolation("sidebar").should("be.visible");
      });

      it("should navigate to /login, if click into cancel button", () => {
        cy.contains("cancelar")
          .should("be.visible")
          .should("have.text", "cancelar")
          .should("be.enabled")
          .click();
        cy.location("pathname").should("be.eq", "/client/login");
      });
    });

    describe("ERROR CASES", () => {
      it("should focus on email input if try it to register an user without an email, or with an invalid email", () => {
        cy.registerDataFlux(MOCK.invalidEmailAttempt);
        cy.contains("registrar").should("be.visible").click();
        cy.getInterpolation("email-input").should("be.focused");
      });

      it("should appear a message with text (As senhas devem ser iguais!) if confirm password does not match to password", () => {
        cy.registerDataFlux(MOCK.confirmPasswordDoesNotMatchToPasswordAttempt);
        cy.contains("registrar").should("be.visible").click();
        cy.contains("As senhas devem ser iguais!").should("be.visible");
      });

      it("should focus on confirm terms checkbox for a invalid register attempt without accepting the terms", () => {
        cy.registerDataFlux(MOCK.withoutTermsAttempt);
        cy.contains("registrar").should("be.visible").click();
        cy.getInterpolation("terms-checkbox").should("be.focused");
      });

      it("should return an message with text (Este Login já possui um registro no sistema.) if you already have an login", () => {
        cy.registerDataFlux(MOCK.alreadyRegisterAttempt);
        cy.contains("registrar").should("be.visible").click();
        cy.contains(MOCK.alreadyRegisterAttemptExpectedResponse).should(
          "be.visible"
        );
      });
    });
  });
});
