import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const CourtIndex = ({ basketballcourts }) => {
  return (
    <>
      <div className="courts-body">
        <h3 className="text-center my-5">View Courts:</h3>
        <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-4 p-3">
          {basketballcourts?.map((court, index) => {
            return (
              <Card
                className="shadow-lg"
                key={index}
              >
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
                  <NavLink
                    to={`/courtindex/${court.id}`}
                    className="nav-link"
                  >
                    <Button className="court-button">More Details</Button>
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
