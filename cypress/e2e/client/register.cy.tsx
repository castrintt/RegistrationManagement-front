/// <reference types="Cypress" />
import * as MOCK from "./register__mock__";
import { CreateUserRequest } from "../../../business/domain/entities/request/CreateUserRequest";

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
  beforeEach(() => {
    cy.visit("/register");
  });

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
    const cyInterpol = (dataCy: string): string => {
      return `['data-cy="${dataCy}"']`;
    };

    describe("SUCCESS CASES", () => {});
    describe("ERROR CASES", () => {});
  });
});
