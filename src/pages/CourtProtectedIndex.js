import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
const CourtProtectedIndex = ({ basketballcourts, currentUser }) => {
  const myCourts = basketballcourts?.filter(
    (court) => court.user_id === currentUser.id
  );
  return (
    <div>
      <h3 className="text-center my-5">My Courts:</h3>
      <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-4">
        {myCourts.map((court, index) => {
          return (
            <Card key={index} className="shadow-lg p-3">
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
                  <Button>More Details</Button>
                </NavLink>
                <button className="mx-2 my-2 btn btn-dark">Edit</button>
                <button className="mx-2 my-2 btn btn-danger">Delete</button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default CourtProtectedIndex;







