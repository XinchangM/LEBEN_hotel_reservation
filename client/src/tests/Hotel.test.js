import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";

import React from "react";

let mockIsAuthenticated = true;

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
    };
  },
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => {
    return mockUseNavigate;
  },
}));

test("renders Home", () => {
  render(
      <MemoryRouter initialEntries={["/"]}>
      <Hotel />
      </MemoryRouter>
  );
  expect(screen.getByText("Includes taxes and fees")).toBeInTheDocument();
  expect(screen.getByText("Free cancellation")).toBeInTheDocument();
  expect(screen.getByText("You can cancel later, so lock in this great price today!")).toBeInTheDocument();

  });
  