import { render, screen } from "@testing-library/react";
import CourtEdit from "../pages/CourtEdit";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import mockBasketBallCourts from "../mockBasketballCourts";
describe("<CourtEdit />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/edit/1"]}>
        <Routes>
          <Route
            path="edit/:id"
            element={<CourtEdit basketballcourts={mockBasketBallCourts} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
  it("renders a Court Page", () => {
    const text = screen.getByText(/edit court/i);
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
    expect(screen.getByText(/street/i)).toBeInTheDocument();
    expect(screen.getByText(/city/i)).toBeInTheDocument();
    expect(screen.getByText(/state/i)).toBeInTheDocument();
    expect(screen.getByText(/zip code/i)).toBeInTheDocument();
  });
  it("has a button called 'Submit'", () => {
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});












