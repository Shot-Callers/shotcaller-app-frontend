import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";


describe("<Home/>", () => {
  const home = () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };
  it("It renders without errors", () => {
    home();
  });
  it("The Home component has h1 heading", () => {
    home();
    const h1 = screen.getByRole("heading", {
      name: "ShotCaller",
    });
    expect(h1).toBeInTheDocument();
    const h1Text = screen.getByText("ShotCaller");
    expect(h1Text).toBeInTheDocument();
  });
  it("The Home component has h3 heading", () => {
    home();
    const h3 = screen.getByRole("heading", {
      name: "Find a live game near you!",
    });
    expect(h3).toBeInTheDocument();
    const h3Text = screen.getByText("Find a live game near you!");
    expect(h3Text).toBeInTheDocument();
  });
});