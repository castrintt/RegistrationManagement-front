/// <reference types="Cypress" />
import ClientSidebar from "../../../src/App/Components/Sidebar/Client/ClientSidebar";
import { mount } from "cypress/react18";
import { Provider } from "react-redux";
import store from "../../../src/App/Store/Store";
import { BrowserRouter as Router } from "react-router-dom";

describe("COMPONENT TESTING", () => {
  beforeEach(() => {
    mount(
      <Router>
        <Provider store={store}>
          <ClientSidebar />
        </Provider>
      </Router>
    );
  });

  const cyInterpolation = (cyText: string) => {
    return `[data-cy="${cyText}"]`;
  };

  it("should render", () => {
    cy.get(cyInterpolation("logo-image")).should("be.visible");
    cy.get(cyInterpolation("icons-home")).should("be.visible");
    cy.get(cyInterpolation("icons-user")).should("be.visible");
    cy.get(cyInterpolation("icons-dashboard")).should("be.visible");
    cy.get(cyInterpolation("icons-logout")).should("be.visible");
  });
});
