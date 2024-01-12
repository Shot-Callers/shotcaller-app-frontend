import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import player3 from "../assests/Player3.png"
import player5 from "../assests/Player5.png"
import player6 from "../assests/Player6.png"
import player7 from "../assests/Player7.png"
import player4 from "../assests/Player4.png"
const CourtProtectedIndex = ({ basketballcourts, currentUser }) => {
  const myCourts = basketballcourts?.filter(
    (court) => court.user_id === currentUser.id
  );

  const players = [player3, player4, player5, player6, player7]
  const randomPlayers = players[Math.floor(Math.random() * players.length)];

  const colors = ["#6BBAFF", "#FFA34A", "#FF5F5F", "#7052FF", "#19D79E"]
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div>
      <h3 className="text-center my-5"><b>My Courts:</b></h3>
      <div className="d-flex flex-column flex-md-row  flex-wrap justify-content-evenly align-items-center gap-4">
        {myCourts.map((court, index) => {
          return (
            <Card key={index} className="shadow-lg p-3" style={{background: `url(${randomPlayers}) top center/cover ${randomColors}`}}>
              <CardBody>
              <div className="court-text">
                    <CardTitle>
                      <b>
                        Court name:{court.name}, {court.address}, {court.city}
                      </b>
                    </CardTitle>
                    <CardSubtitle>{court.state} </CardSubtitle>
                    <CardSubtitle>{court.zip} </CardSubtitle>
                    <CardSubtitle>Court type:{court.court_type} </CardSubtitle>
                    <CardSubtitle>Number players:{court.number_players} </CardSubtitle>
                  </div>
                <NavLink to={`/courtshow/${court.id}`} className="nav-link">
                  <Button style={{ color:"white", backgroundColor:"#EBA059" }}>More Details</Button>
                </NavLink>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default CourtProtectedIndex;







