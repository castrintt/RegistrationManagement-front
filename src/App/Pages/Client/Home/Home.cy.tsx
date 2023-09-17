/// <reference types="Cypress" />

import { Provider } from "react-redux";
import React from "react";
import store from "../../../Store/Store";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

describe("HOME COMPONENT", () => {
  beforeEach(() => {
    cy.mount(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );
  });

  it("should render correctly", () => {
    cy.getInterpolation("container").should("exist");
  });

});
