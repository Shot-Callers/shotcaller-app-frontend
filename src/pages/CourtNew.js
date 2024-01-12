import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CourtNew = ({ currentUser, createCourts }) => {
  const navigate = useNavigate();
  const [newCourt, setNewCourt] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    court_type: "",
    number_players: "",
    user_id: currentUser?.id,
  });
  const handleChange = (e) => {
    setNewCourt({ ...newCourt, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    createCourts(newCourt);
    navigate("/courtindex");
  };
  return (
    <div className="pb-5">
      <h3 className="text-center" style={{ textShadow: "0 5px 5px grey" }}>
        Add New Court
      </h3>
      <Form className="w-50 m-auto p-3 shadow-lg rounded pt-1 pb-3">
        <FormGroup>
          <Label for="name"><b>Name</b></Label>
          <Input
            name="name"
            placeholder="Name"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address"><b>Street</b></Label>
          <Input
            name="address"
            placeholder="Street"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city"><b>City</b></Label>
          <Input
            name="city"
            placeholder="City"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state"><b>State</b></Label>
          <Input
            name="state"
            placeholder="State"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="zip"><b>Zip Code</b></Label>
          <Input
            name="zip"
            placeholder="zip"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label><b>Court Type</b></Label>
          <select name="court_type" onChange={handleChange} className="form-control text-center">
            <option value="">-Choose Court Type-</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="rubber">Rubber</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label><b>Number of Players</b></Label>
          <select name="number_players" onChange={handleChange} className="form-control text-center">
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
export default CourtNew;
