import { render, screen } from "@testing-library/react";
import CourtShow from "../pages/CourtShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockBasketBallCourts from "../mockBasketballCourts";
const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/courtshow/1"]}>
      <Routes>
        <Route
          path="courtshow/:id"
          element={<CourtShow basketballcourts={mockBasketBallCourts} />}
        ></Route>
      </Routes>
    </MemoryRouter>
  );
};
describe("<CourtShow/>", () => {
  it("It render without errors", () => {
    renderShow();
    screen.logTestingPlaygroundURL()
  });
  it("Render correct attributes", () => {
    renderShow();
    expect(screen.getByText(`Court Name: ${mockBasketBallCourts[0].name}`)).toBeInTheDocument();
    expect(screen.getByText(/city onestate 1 12345/i)).toBeInTheDocument();
    expect(screen.getByText(/court type: number of players: 5/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /back to listings/i,
      })
    ).toBeInTheDocument();
  });
});
























