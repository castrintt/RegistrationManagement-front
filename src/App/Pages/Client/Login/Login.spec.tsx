import {
  describe,
  it,
  expect,
  render,
  screen,
  beforeEach,
} from "@utils/vitest";
import ProviderAndRouterWrapper from "@utils/ProviderAndRouterWrapper";
import Login from "./Login";
import '@testing-library/react'

describe("Login", () => {
  beforeEach(() => {
    render(
      <ProviderAndRouterWrapper>
        <Login />
      </ProviderAndRouterWrapper>
    );
  });

  it("should render correctly ", () => {
    expect(screen.findByText(/Login/i)).toBeDefined();
  });
});
