import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";
import { BrowserRouter } from "react-router-dom";

describe("<Login />", () => {
  const login = () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  };
  it("renders a without errors", () => {
    login();
  });
  it("has a heading", () => {
    login();
    expect(
      screen.getByRole("heading", {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });
  it("has an email, password input,and skill level select", () => {
    login();
    expect(screen.getByText(/email: password:/i)).toBeInTheDocument();

    expect(screen.getByText(/choose skill level/i)).toBeInTheDocument();
  });
  it("has a submit button", () => {
    login();
    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });
  it("has a forgot password text and link", () => {
    login();
    expect(screen.getByText(/forgot password\? here\./i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /reset/i,
      })
    ).toBeInTheDocument();
  });
});
