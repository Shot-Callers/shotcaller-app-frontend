import { render, screen } from "@testing-library/react";
import CourtIndex from "../pages/CourtIndex";
import { BrowserRouter } from "react-router-dom";
import mockBasketBallCourts from "../mockBasketballCourts";
describe("<CourtIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      id: 1,
      skill_level: 1
    };
    render(
      <BrowserRouter>
        <CourtIndex basketballcourts={mockBasketBallCourts} />
      </BrowserRouter>
    );
  });
  it("renders without crashing", () => {
    const element = screen.getByText("View Courts:");
    expect(element).toBeInTheDocument();
  });
  it("contains buttons", () => {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
  it("renders court cards", () => {
    mockBasketBallCourts.forEach((court) => {
      const name = screen.getByText(`Court name:${court.name}, ${court.address}, ${court.city}`);
      expect(name).toBeInTheDocument();
      expect(screen.getByText(court.state)).toBeInTheDocument();
      expect(screen.getByText(court.zip)).toBeInTheDocument();
      expect(screen.getByText(`Court type:${court.court_type}`)).toBeInTheDocument();
      expect(screen.getByText(`Number players:${court.number_players}`)).toBeInTheDocument();
      
    });
  });
});


























