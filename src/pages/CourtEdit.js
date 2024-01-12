import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const CourtEdit = ({ basketballcourts, handleEditCourt, currentUser }) => {
  const { id } = useParams();
  const currentCourt = basketballcourts?.find((court) => court.id === +id);

  const navigate = useNavigate();

  const [editCourt, setEditCourt] = useState({
    name: currentCourt?.name,
    address: currentCourt?.address,
    city: currentCourt?.city,
    state: currentCourt?.state,
    zip: currentCourt?.zip,
    court_type: currentCourt?.court_type,
    number_players: currentCourt?.number_players,
    user_id: currentUser?.id,
  });
  const handleChange = (e) => {
    setEditCourt({ ...editCourt, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleEditCourt(editCourt, currentCourt?.id);
    navigate("/courtindex");
  };
    
 
  return (
    <div>
      <h3 className="text-center" style={{ textShadow: "0 5px 5px grey" }}>
        Edit Court
      </h3>
      <Form className="w-50 m-auto p-3 shadow-lg rounded pt-1">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            value={editCourt?.name}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Street</Label>
          <Input
            name="address"
            value={editCourt?.address}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            name="city"
            value={editCourt?.city}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            name="state"
            value={editCourt?.state}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="zip">Zip Code</Label>
          <Input
            name="zip"
            value={editCourt?.zip}
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label name="court type">Court Type</Label>
          <select onChange={handleChange} className="form-control text-center">
            <option value="">-Choose Court Type-</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="rubber">Rubber</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label name="number of players">Number of Players</Label>
          <select onChange={handleChange} className="form-control text-center">
            <option value="">-Choose players-</option>
            {Array.from({ length: 20 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </FormGroup>
        <Button onClick={handleSubmit} className="w-100" style={{ color:"white", backgroundColor:"#EBA059" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default CourtEdit;
