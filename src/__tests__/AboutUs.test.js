import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";


describe('<AboutUs />', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AboutUs />
        </BrowserRouter>
      );
    });

    it('renders team members', () => {
        const teamMembers = screen.getAllByRole('listitem');
        expect(teamMembers).toHaveLength(7);
    
        const teamMemberNames = ['Michael Reyes', 'Jeffrey Guzman', 'Eric McKee', 'Franz Marte'];
        teamMemberNames.forEach((name, index) => {
          expect(teamMembers[index]).toHaveTextContent(name);
        });
      });
    
      it('renders mission and vision', () => {
        const missionHeading = screen.getByRole('heading', { level: 5, name: /our mission/i });
        const missionText = screen.getByText(
          /shotcallers is not just an app; it's a vision brought to life by team shot callers./i
        );
    
        expect(missionHeading).toBeInTheDocument();
        expect(missionText).toBeInTheDocument();
      });
    
      it('renders why choose shotcallers section', () => {
        const reasons = screen.getAllByRole('listitem');
        expect(reasons).toHaveLength(7);
    
        const reasonTexts = [
          'Real-Time Court Map: Explore nearby games or locate empty courts instantly.',
          'Spontaneous Connections: Foster camaraderie among basketball enthusiasts, making every pickup game memorable.',
          'User-Centric Design: Our app is meticulously crafted to make finding and participating in pickup games intuitive and enjoyable.',
        ];
    
        reasonTexts.forEach((text, index) => {
            expect(screen.getByText(text)).toBeInTheDocument();
        });
      });
    });