import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const CourtProtectedIndex = ({
  basketballcourts,
  currentUser,
  randomColors,
  randomPlayers,
}) => {
  const myCourts = basketballcourts?.filter(
    (court) => court.user_id === currentUser.id
  );

  return (
    <div className="mb-5">
      <h3 className="text-center my-3">
        <b>My Courts:</b>
      </h3>
      <div className="d-flex flex-column flex-md-row flex-wrap justify-content-evenly align-items-center gap-4">
        {myCourts.map((court, index) => {
          return (
            <Card
              id="show-card"
              key={index}
              className="shadow-lg p-3"
              style={{
                background: `url(${randomPlayers()}) top center/cover ${randomColors()}`,
                width: "25rem",
              }}
            >
              <CardBody>
                <div className="court-text d-flex flex-column justify-content-center align-items-start gap-3">
                  <CardTitle className="text-light fs-4">
                    {" "}
                    <b>
                      <u> Court name: </u>
                      <span className="text-light">{court.name}</span>
                    </b>
                  </CardTitle>
                  <CardSubtitle className="text-light fs-5">
                    {court.address}{" "}
                  </CardSubtitle>
                  <CardSubtitle className="text-light fs-5">
                    {court.city}{" "}
                  </CardSubtitle>
                  <CardSubtitle className="text-light fs-5">
                    {court.state}{" "}
                  </CardSubtitle>
                  <CardSubtitle className="text-light fs-5">
                    {court.zip}{" "}
                  </CardSubtitle>
                  <CardSubtitle className="text-light fs-5">
                    <u>Court type: </u>
                    <span className="text-light">{court.court_type} </span>
                  </CardSubtitle>
                  <CardSubtitle className="text-light fs-5">
                    <u>Number players: </u>
                    <span className="text-light">{court.number_players} </span>
                  </CardSubtitle>
                </div>
                <NavLink to={`/courtshow/${court.id}`} className="nav-link">
                  <Button className="btn bg-dark mt-5">More Details</Button>
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
