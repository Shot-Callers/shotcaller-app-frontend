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
 
  it("The Home component has h3 heading", () => {
    home();
    expect(screen.getByText(/find/i)).toBeInTheDocument();
    expect(screen.getByText(/a basketball court/i)).toBeInTheDocument();
    expect(screen.getByText(/nearbyball is life!/i)).toBeInTheDocument();
  }); 
  it("has the bballimg, phone1, and phone2 images", () => {
    home();
    const bballimg = screen.getByAltText('bballimg');
    const phone1 = screen.getByAltText('phone1');
    const phone2 = screen.getByAltText('phone2');

    expect(bballimg).toBeInTheDocument();
    expect(phone1).toBeInTheDocument();
    expect(phone2).toBeInTheDocument();
  });
});
