/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace Cypress {
  interface Chainable<Subject> {
    interceptCall(call: RegisterCall): Chainable<null>;
    getInterpolation(dataCy: string): Chainable<null>;
    registerDataFlux(user: CreateUserRequest): Chainable<null>;
  }
}
