/* global google */
import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from "axios";

const CourtShow = ({
  basketballcourts,
  deleteCourt,
  currentUser,
  randomColors,
  randomPlayers,
}) => {
  const [formattedAddress, setFormattedAddress] = useState("");
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [courtDetails, setCourtDetails] = useState(null);
  let { id } = useParams();
  const currentCourt = basketballcourts?.find((court) => court.id === +id);

  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  useEffect(() => {
    if (currentCourt) {
      geocodeAddress(
        currentCourt.address,
        currentCourt.city,
        currentCourt.state
      );
    }
  }, [currentCourt]);

  const geocodeAddress = async (street, city, state) => {
    try {
      const address = `${street}, ${city}, ${state}`;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );

      const results = response.data.results;

      if (results && results.length > 0) {
        const rooftopResults = results.filter(
          (result) =>
            result.types.includes("premise") ||
            result.types.includes("street_address")
        );

        const selectedLocation =
          rooftopResults.length > 0
            ? rooftopResults[0]
            : results.find(
                (result) => result.geometry.location_type === "APPROXIMATE"
              );

        const location = selectedLocation.geometry.location;
        setCenter({ lat: location.lat, lng: location.lng });
        setFormattedAddress(selectedLocation.formatted_address);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleSubmit = () => {
    deleteCourt(currentCourt.id);
    navigate("/courtindex");
  };

  return (
    <div className="mb-5">
      <div className="w-100 m-auto d-flex justify-content-center align-items-center my-5">
        {currentCourt && (
          <Card
            className="shadow-lg p-3 card"
            style={{
              background: `url(${randomPlayers()}) top center/cover ${randomColors()}`,
              width: "25rem",
            }}
          >
            <CardBody className="d-flex flex-column justify-content-center align-items-start gap-3">
              <div>
                <div>
                  <CardTitle className="text-light fs-4">
                    {" "}
                    <b>
                      <u> Court name: </u>
                      <span className="text-light">{currentCourt.name}</span>
                    </b>
                  </CardTitle>
                  <CardSubtitle className="text-light fs-5">
                    <u>Court type: </u>
                    <span className="text-light">
                      {currentCourt.court_type}{" "}
                    </span>
                  </CardSubtitle>
                  <CardSubtitle className="text-light fs-5">
                    <u>Number players: </u>
                    <span className="text-light">
                      {currentCourt.number_players}{" "}
                    </span>
                  </CardSubtitle>
                </div>
              </div>
              <NavLink to={`/courtindex`} className="nav-link">
                <Button className="bg-dark mt-5">Back to Listings</Button>
              </NavLink>
              {currentUser && (
                <div className="d-flex justify-content-center gap-2">
                  <NavLink to={`/courtedit/${currentCourt.id}`}>
                    <Button className="btn bg-secondary">Edit Court</Button>
                  </NavLink>
                  <Button className="bg-danger" onClick={handleSubmit}>
                    Delete Court
                  </Button>
                </div>
              )}
            </CardBody>
          </Card>
        )}
      </div>
      {!isLoaded && (
        <div className="text-center">
          <h2>Map loading</h2>
        </div>
      )}
      {isLoaded && (
        <>
          <div
            className="text-center d-flex flex-column justify-content-center align-items-center m-auto"
            style={{ height: "15rem" }}
          >
            <h2>Live Map</h2>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                mapId: "ec4270d0120b6f02",
              }}
            >
              {center.lat !== 0 && center.lng !== 0 && (
                <Marker position={center} />
              )}
              {/* Additional map components */}
            </GoogleMap>
          </div>
          {courtDetails && (
            <div className="text-center mt-4">
              <h2>Court Details</h2>
              <p>Name: {courtDetails.name}</p>
              <p>Address: {courtDetails.formatted_address}</p>
              <p>
                Opening Hours:{" "}
                {courtDetails.opening_hours?.weekday_text.join(", ")}
              </p>
              <p>Website: {courtDetails.website}</p>
              <p>Rating: {courtDetails.rating}</p>
              {/* Additional details as needed */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CourtShow;
