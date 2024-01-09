import { render, screen } from "@testing-library/react";
import CourtProtectedIndex from "../pages/CourtProtectedIndex";
import { BrowserRouter } from "react-router-dom";
import mockBasketballCourts from "../mockBasketballCourts";
describe("<CourtProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      id: 1,
      skill_level: 2,
    };
    render(
      <BrowserRouter>
        <CourtProtectedIndex
          currentUser={currentUser}
          basketballcourts={mockBasketballCourts}
        />
      </BrowserRouter>
    );
  });
  it("renders without crashing", () => {
    const element = screen.getByText("My Courts:");
    expect(element).toBeInTheDocument();
  });
  it("contains buttons", () => {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
  it("renders courts", () => {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
    const myCourts = mockBasketballCourts.filter(
      (court, currentUser) => currentUser.id === court.user_id
    );
    myCourts.forEach((court) => {
      const name = screen.getByText(`Court Name: ${court.name}`);
      expect(name).toBeInTheDocument();
      const street = screen.getByText(court.address);
      expect(street).toBeInTheDocument();
      const city = screen.getByText(court.city);
      expect(city).toBeInTheDocument();
      const state = screen.getByText(court.state);
      expect(state).toBeInTheDocument();
      const zip = screen.getByText(court.zip);
      expect(state).toBeInTheDocument();
      const court_type = screen.getByText(court.court_type);
      expect(court_type).toBeInTheDocument();
      const number_players = screen.getByText(court.number_players);
      expect(number_players).toBeInTheDocument();
    });
    
  });
});