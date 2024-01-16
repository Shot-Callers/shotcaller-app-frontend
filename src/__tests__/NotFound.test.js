import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";


describe("<NotFound/>", () => {
  const notFound = () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  };
  it("Renders page without errors", () => {
    notFound();
    const text = screen.getByText(/shoot again, 404 not found/i);
    expect(text).toBeInTheDocument();
  });
});