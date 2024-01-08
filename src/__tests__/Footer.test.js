import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";


describe("<Footer/>", () => {
  const footer = () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  };
  it("Contains a footer", () => {
    footer();
  });
  it("It contains copyright information", () => {
    footer();
    const copyright = screen.getByRole("contentinfo");
    expect(copyright).toBeInTheDocument();
    const currentYear = new Date().getFullYear();
    const footerTextPattern = new RegExp(
      `©ShotCaller App \\| ${currentYear}`,
      "i"
    );
    const footerText = screen.getByText(footerTextPattern);
    expect(footerText).toBeInTheDocument();
  });
});





