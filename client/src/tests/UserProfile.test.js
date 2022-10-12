import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserProfile from "../pages/UserProfile";

let mockIsAuthenticated = true;

const mockLoginWithRedirect = jest.fn();
const mockUseNavigate = jest.fn();

jest.mock("@auth0/auth0-react", () => ({
  ...jest.requireActual("@auth0/auth0-react"),
  Auth0Provider: ({ children }) => children,
  useAuth0: () => {
    return {
      isLoading: false,
      user: {
        name: "free0nemeng",
        email: "free0nemeng@gmail.com",
      },
      isAuthenticated: mockIsAuthenticated,
      loginWithRedirect: mockLoginWithRedirect,
    };
  },
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => {
    return mockUseNavigate;
  },
}));



test("renders ProfileDetail", () => {
render(
    <MemoryRouter initialEntries={["/"]}>
    <UserProfile />
    </MemoryRouter>
);
expect(screen.getByText("free0nemeng")).toBeInTheDocument();

})