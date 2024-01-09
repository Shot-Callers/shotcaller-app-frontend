import { render, screen } from "@testing-library/react";
import SignUp from "../pages/SignUp";
import { BrowserRouter } from "react-router-dom";

describe("<SignUp />", () => {
  const signUp = () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
  };
  it("renders a without errors", () => {
    signUp();
  });
  it("has a heading", () => {
    signUp();
    expect(
      screen.getByRole("heading", {
        name: /sign up/i,
      })
    ).toBeInTheDocument();
  });
  it("has an email, password input,and skill level select", () => {
    signUp();
    expect(screen.getByText(/email: password:/i)).toBeInTheDocument();

    expect(screen.getByText(/choose skill level/i)).toBeInTheDocument();
  });
  it("has a submit button", () => {
    signUp();
    expect(
      screen.getByRole("button", {
        name: /sign up/i,
      })
    ).toBeInTheDocument();
  });
  it("has a forgot password text and link", () => {
    signUp();
    expect(screen.getByText(/forgot password\? here\./i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /reset/i,
      })
    ).toBeInTheDocument();
  });
});
