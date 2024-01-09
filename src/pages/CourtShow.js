import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
const CourtShow = ({ basketballcourts }) => {
  let { id } = useParams();
  const currentCourt = basketballcourts?.find((court) => court.id === +id);
  return (
    <>
      <div className="w-100 m-auto d-flex justify-content-center align-items-center my-5">
        {currentCourt && (
          <Card className="shadow-lg p-3">
            <CardBody>
              <div>
                <div>
                  <CardTitle>
                    <b>Court Name: {currentCourt?.name}</b>
                  </CardTitle>
                  <CardSubtitle>
                    {currentCourt?.street} {currentCourt?.city}
                    {currentCourt?.state} {currentCourt.zip}
                  </CardSubtitle>
                  <CardSubtitle>
                    Court Type: {currentCourt.type}
                    Number of players: {currentCourt?.number_players}
                  </CardSubtitle>
                </div>
              </div>
              <NavLink to={`/courtindex`} className="nav-link">
                <Button>Back to Listings</Button>
              </NavLink>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};
export default CourtShow;