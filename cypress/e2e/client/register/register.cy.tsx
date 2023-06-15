/// <reference types="Cypress" />
import * as MOCK from "./register__mock__";
import { CreateUserRequest } from "../../../../business/domain/entities/request/client/registerUser/CreateUserRequest";

type ApiGetTesting = {
  apiUrl: string;
  terms: boolean;
};

type ApiPostTesting = {
  requestBody: CreateUserRequest;
  expectedStatus: 200 | 400;
  expectedResponse: boolean | string;
};

describe("REGISTER", () => {
  describe("API CALLS TESTING", () => {
    const registerGetTesting = (getConstructor: ApiGetTesting) => {
      const cyRequestConfiguration = {
        method: "GET",
        url: `https://localhost:7239/api/${getConstructor.apiUrl}`,
      };
      cy.request(cyRequestConfiguration).then((response) => {
        const responseBody = JSON.parse(
          response.allRequestResponses[0]["Response Body"]
        );
        expect(responseBody).to.have.property("editorSettings");
        expect(responseBody).to.have.property(
          getConstructor.terms ? "termsDescription" : "policyDescription"
        );
        expect(responseBody).to.have.property("publishedDate");
        expect(response.status).to.eq(200);
      });
    };

    const registerPostTesting = (postConstructor: ApiPostTesting) => {
      const cyRequestConfiguration = {
        method: "POST",
        url: `https://localhost:7239/api/Client/client_register`,
        body: postConstructor.requestBody,
        failOnStatusCode: false,
      };
      cy.request(cyRequestConfiguration).then((response) => {
        const responseTypes = {
          200:
            postConstructor.expectedStatus === 200 &&
            JSON.parse(response.allRequestResponses[0]["Response Body"]),
          400: postConstructor.expectedStatus === 400 && response.body[0].value,
        };
        expect(responseTypes[postConstructor.expectedStatus]).to.be.eq(
          postConstructor.expectedResponse
        );
        expect(response.status).to.eq(postConstructor.expectedStatus);
      });
    };

    describe("SUCCESS CASES", () => {
      it("should return an object for the privacy policies get", () => {
        const getConstructor: ApiGetTesting = {
          apiUrl: "PrivacyPolicy/get_privacy_policy_the_last_published",
          terms: false,
        };
        registerGetTesting(getConstructor);
      });

      it("should return an object for the terms of use get", () => {
        const getConstructor: ApiGetTesting = {
          apiUrl: "TermsOfUse/get_terms_the_last_published",
          terms: true,
        };
        registerGetTesting(getConstructor);
      });

      it("should return true to a valid register attempt", () => {
        const requestConstructor: ApiPostTesting = {
          requestBody: MOCK.successAttempt,
          expectedStatus: 200,
          expectedResponse: true,
        };
        registerPostTesting(requestConstructor);
      });
    });

    describe("ERROR CASES", () => {
      it("should return false to a register attempt for a record that is already in the database", () => {
        const requestConstructor: ApiPostTesting = {
          requestBody: MOCK.alreadyRegisterAttempt,
          expectedStatus: 400,
          expectedResponse: MOCK.alreadyRegisterAttemptExpectedResponse,
        };
        registerPostTesting(requestConstructor);
      });

      it("should return false to a register attempt without accept the terms", () => {
        const requestConstructor: ApiPostTesting = {
          requestBody: MOCK.withoutTermsAttempt,
          expectedStatus: 400,
          expectedResponse: MOCK.withoutTermsAttemptExpectedResponse,
        };
        registerPostTesting(requestConstructor);
      });

      it("should return false to a register attempt without a invalid email ", () => {
        const requestConstructor: ApiPostTesting = {
          requestBody: MOCK.invalidEmailAttempt,
          expectedStatus: 400,
          expectedResponse: MOCK.invalidEmailAttemptExpectedResponse,
        };
        registerPostTesting(requestConstructor);
      });

      it("should return false to a confirmPassword that is different to the password", () => {
        const requestConstructor: ApiPostTesting = {
          requestBody: MOCK.confirmPasswordDoesNotMatchToPasswordAttempt,
          expectedStatus: 400,
          expectedResponse: MOCK.passwordMatchAttemptExpectedResponse,
        };
        registerPostTesting(requestConstructor);
      });
    });
  });

  describe("COMPONENT TESTING", () => {
    beforeEach(() => {
      cy.visit("/register");
    });

    const cyInterpol = (dataCy: string): string => {
      return `[data-cy="${dataCy}"]`;
    };

    const registerDataFlux = (user: CreateUserRequest) => {
      cy.get(cyInterpol("email-input"))
        .should("be.visible")
        .should("have.value", "")
        .type(user.login);
      cy.get(cyInterpol("password-input"))
        .should("be.visible")
        .should("have.value", "")
        .type(user.userPassword.password);
      cy.get(cyInterpol("confirm-password-input"))
        .should("be.visible")
        .should("have.value", "")
        .type(user.userPassword.passwordConfirm);
      cy.get(cyInterpol("terms-checkbox"))
        .should("be.visible")
        .should("be.not.checked");
      if (user.acceptTermsAndPolicies) {
        cy.get(cyInterpol("terms-checkbox")).check();
      }
      cy.get(cyInterpol("market-area-checkbox"))
        .should("be.visible")
        .should("be.not.checked");
      if (user.acceptNotification) {
        cy.get(cyInterpol("market-area-checkbox")).check();
      }
    };

    describe("SUCCESS CASES", () => {
      it("should render", () => {
        cy.get(cyInterpol("register-container")).should("be.visible");
      });

      it("should be able to type or check all inputs", () => {
        registerDataFlux(MOCK.alreadyRegisterAttempt);
      });

      it('should appear "Registro completo!" for a successful register attempts', () => {
        registerDataFlux(MOCK.newRegisterAttempt);
        cy.contains("registrar")
          .should("have.text", "registrar")
          .should("be.visible")
          .should("be.enabled")
          .click();
        cy.contains("Registro completo!").should("be.visible");
        cy.location("pathname").should("be.eq", "/login");
      });

      it('should open terms modal if click in "Termos de uso"', () => {
        cy.get(cyInterpol("terms-modal-button"))
          .should("be.visible")
          .should("have.text", "Termo de uso")
          .click();
        cy.get(cyInterpol("terms-modal")).should("be.visible");
        cy.get(cyInterpol("terms-modal-title"))
          .should("be.visible")
          .should("have.text", "Termos de uso");
        cy.get(cyInterpol("close-icon-terms")).should("be.visible").click();
        cy.get(cyInterpol("terms-modal")).should("not.be.visible");
      });

      it('should open policies modal if click in "Politicas de privacidade"', () => {
        cy.get(cyInterpol("policies-modal-button"))
          .should("be.visible")
          .should("have.text", "Politicas de privacidade")
          .click();
        cy.get(cyInterpol("policies-modal")).should("be.visible");
        cy.get(cyInterpol("policies-modal-title"))
          .should("be.visible")
          .should("have.text", "Politicas de privacidade");
        cy.get(cyInterpol("close-icon-policies")).should("be.visible").click();
        cy.get(cyInterpol("policies-modal")).should("not.be.visible");
      });

      it("should not render the sidebar, if the screen width is bellow 700", () => {
        cy.viewport(699, 600);
        cy.get(cyInterpol("sidebar")).should("not.be.visible");
        cy.viewport(600, 600);
        cy.get(cyInterpol("sidebar")).should("not.be.visible");
        cy.viewport(500, 600);
        cy.get(cyInterpol("sidebar")).should("not.be.visible");
        cy.viewport(400, 600);
        cy.get(cyInterpol("sidebar")).should("not.be.visible");
        cy.viewport(300, 600);
        cy.get(cyInterpol("sidebar")).should("not.be.visible");
      });

      it("should render the sidebar if the screen width is above 700", () => {
        cy.viewport(700, 600);
        cy.get(cyInterpol("sidebar")).should("be.visible");
        cy.viewport(800, 600);
        cy.get(cyInterpol("sidebar")).should("be.visible");
        cy.viewport(900, 600);
        cy.get(cyInterpol("sidebar")).should("be.visible");
        cy.viewport(1000, 600);
        cy.get(cyInterpol("sidebar")).should("be.visible");
      });

      it("should navigate to /login, if click into cancel button", () => {
        cy.contains("cancelar")
          .should("be.visible")
          .should("have.text", "cancelar")
          .should("be.enabled")
          .click();
        cy.location("pathname").should("be.eq", "/login");
      });
    });

    describe("ERROR CASES", () => {
      it("should focus on email input if try it to register an user without an email, or with an invalid email", () => {
        registerDataFlux(MOCK.invalidEmailAttempt);
        cy.contains("registrar").should("be.visible").click();
        cy.get(cyInterpol("email-input")).should("be.focused");
      });

      it("should appear a message with text (As senhas devem ser iguais!) if confirm password does not match to password", () => {
        registerDataFlux(MOCK.confirmPasswordDoesNotMatchToPasswordAttempt);
        cy.contains("registrar").should("be.visible").click();
        cy.contains("As senhas devem ser iguais!").should("be.visible");
      });

      it("should focus on confirm terms checkbox for a invalid register attempt without accepting the terms", () => {
        registerDataFlux(MOCK.withoutTermsAttempt);
        cy.contains("registrar").should("be.visible").click();
        cy.get(cyInterpol("terms-checkbox")).should("be.focused");
      });

      it("should return an message with text (Este Login já possui um registro no sistema.) if you already have an login", () => {
        registerDataFlux(MOCK.alreadyRegisterAttempt);
        cy.contains("registrar").should("be.visible").click();
        cy.contains(MOCK.alreadyRegisterAttemptExpectedResponse).should(
          "be.visible"
        );
      });
    });
  });
});
