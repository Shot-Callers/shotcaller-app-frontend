import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import player3 from "../assests/Player3.png"
import player5 from "../assests/Player5.png"
import player6 from "../assests/Player6.png"
import player7 from "../assests/Player7.png"
import player4 from "../assests/Player4.png"

const CourtShow = ({ basketballcourts, deleteCourt, currentUser }) => {
  let { id } = useParams();
  const currentCourt = basketballcourts?.find((court) => court.id === +id);

  const players = [player3, player4, player5, player6, player7]
  const randomPlayers = players[Math.floor(Math.random() * players.length)];

  const colors = ["#6BBAFF", "#FFA34A", "#FF5F5F", "#7052FF", "#19D79E"]
  const randomColors = colors[Math.floor(Math.random() * colors.length)];

  const navigate = useNavigate()

  const handleSubmit = () => {
    deleteCourt(currentCourt.id)
    navigate("/courtindex")
  } 
  return (
    <>
      <div className="w-100 m-auto d-flex justify-content-center align-items-center my-5">
        {currentCourt && (
          <Card className="shadow-lg p-3 card" style={{background: `url(${randomPlayers}) top center/cover ${randomColors}`}}>
            <CardBody>
              <div>
                <div>
                  <CardTitle className="text-light">
                    <b>Court Name: {currentCourt?.name}</b>
                  </CardTitle>
                  <CardSubtitle className="text-light">
                    {currentCourt?.street} {currentCourt?.city}
                    {currentCourt?.state} {currentCourt?.zip}
                  </CardSubtitle>
                  <CardSubtitle className="text-light">
                    Court Type: {currentCourt?.type}
                    Number of players: {currentCourt?.number_players}
                  </CardSubtitle>
                </div>
              </div>
              <NavLink to={`/courtindex`} className="nav-link">
                <Button style={{ color:"white", backgroundColor:"#EBA059" }}>Back to Listings</Button>
              </NavLink>
              {currentUser && <>

              <NavLink to={`/courtedit/${currentCourt.id}`}>
                <Button className="btn" style={{ color:"white", backgroundColor:"#EBA059" }}>Edit Court</Button>
              </NavLink>
                <Button className="bg-danger" onClick={handleSubmit}>Delete Court</Button>
              
              </>}
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};
export default CourtShow;
