/// <reference types="Cypress" />
import * as MOCK from "./login__mock__";
import { AuthUserRequest } from "../../../../business/domain/entities/request/client/authUser/AuthUserRequest";

type PostApiCall = {
  user: AuthUserRequest;
  expectedMessage: string;
  successCase: boolean;
};

describe("LOGIN", () => {
  describe("API CALLS", () => {
    const authRequest = (postConstructor: PostApiCall) => {
      cy.request({
        method: "POST",
        url: "https://localhost:7239/api/Authentication/generate_access_token",
        body: {
          login: postConstructor.user.login,
          password: postConstructor.user.password,
        },
        failOnStatusCode: false,
      }).then((response) => {
        const responseBody = response.body;
        expect(response.status).to.be.equal(200);
        expect(responseBody).to.have.property("accessToken");
        expect(responseBody).to.have.property("refreshToken");
        expect(responseBody).to.have.property("expiry");
        expect(responseBody).to.have.property("message");
        expect(responseBody["message"]).to.be.eq(
          postConstructor.expectedMessage
        );
        if (!postConstructor.successCase) {
          expect(responseBody["accessToken"]).to.be.eq("");
          expect(responseBody["refreshToken"]).to.be.eq("");
        }
      });
    };
    describe("SUCCESS CASES", () => {
      it("should return an access token and refresh token to successfully attempt", () => {
        authRequest({
          user: MOCK.successLoginAttempt,
          expectedMessage: MOCK.successAttemptMessage,
          successCase: true,
        });
      });
    });

    describe("ERROR CASES", () => {
      it("should return an empty access token and refresh token to invalid attempt", () => {
        authRequest({
          user: MOCK.randomLoginAttempt,
          expectedMessage: MOCK.invalidAttemptMessage,
          successCase: false,
        });
      });
    });
  });

  describe("COMPONENT", () => {
    beforeEach(() => {
      cy.visit("/login");
    });

    const cyInterpol = (cyText: string) => {
      return `[data-cy="${cyText}"]`;
    };

    describe("SUCCESS CASES", () => {
      it("should render", () => {
        cy.get(cyInterpol("container")).should("be.visible");
      });

      it("should be able to type into inputs", () => {
        cy.get(cyInterpol("email-input"))
          .should("be.visible")
          .should("be.enabled")
          .type("123")
          .should("have.value", "123");
        cy.get(cyInterpol("password-input"))
          .should("be.visible")
          .should("be.enabled")
          .type("123")
          .should("have.value", "123");
        cy.get(cyInterpol("save-login"))
          .should("be.visible")
          .should("be.enabled")
          .click()
          .should("be.checked");
        cy.contains("entrar").should("be.visible").should("be.enabled");
      });

      it("should render an image if the width is higher than 850px", () => {
        cy.viewport(900, 650);
        cy.get(cyInterpol("image-container")).should("be.visible");
      });
      it("should not render an image if the width is lower than 850px", () => {
        cy.viewport(800, 650);
        cy.get(cyInterpol("image-container")).should("not.be.visible");
      });
    });
    // describe("ERROR CASES", () => {});
  });
});
