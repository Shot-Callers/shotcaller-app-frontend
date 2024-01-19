import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const CourtIndex = ({ basketballcourts, randomColors, randomPlayers }) => {
  return (
    <>
      <div className="courts-body mb-5">
        <h3 className="text-center my-5">View Courts:</h3>
        <div className="d-flex flex-column flex-md-row flex-wrap justify-content-evenly align-items-center gap-4 p-3">
          {basketballcourts?.map((court, index) => {
            return (
              <Card
                id="show-card"
                className="shadow-lg"
                key={index}
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
                      <span className="text-light">
                        {court.number_players}{" "}
                      </span>
                    </CardSubtitle>
                  </div>
                  <NavLink to={`/courtshow/${court.id}`} className="nav-link">
                    <Button
                      className="court-button bg-dark mt-2"
                      // style={{ color: "white", backgroundColor: "#EBA000" }}
                    >
                      More Details
                    </Button>
                  </NavLink>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CourtIndex;
