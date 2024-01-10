import { render, screen } from "@testing-library/react";
import CourtNew from "../pages/CourtNew";
import { BrowserRouter } from "react-router-dom";
describe("<CourtNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CourtNew />
      </BrowserRouter>
    );
  });
  it("renders the Court New Page", () => {
    const text = screen.getByText(/add new court/i);
    expect(text).toBeInTheDocument();
  });
  const arr = [
    "name",
    "address",
    "city",
    "state",
    "zip",
    "court_type",
    "number_players",
  ];
  it("has a form with correct entries", () => {
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/street/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/street/i)).toBeInTheDocument();
    expect(screen.getByText(/city/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/city/i)).toBeInTheDocument();
    expect(screen.getByText(/state/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/state/i)).toBeInTheDocument();
    expect(screen.getByText(/zip code/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/zip/i)).toBeInTheDocument();
  });
  it("has a button called 'Submit'", () => {
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});














