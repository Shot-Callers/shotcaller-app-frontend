import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CourtNew = ({ currentUser, handleAddCourt }) => {
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
    handleAddCourt(newCourt);
    navigate("/courtindex");
  };
  return (
    <div>
      <h1 className="text-center my-5" style={{ textShadow: "0 5px 5px grey" }}>
        Add New Court
      </h1>
      <Form className="w-50 m-auto p-3 shadow-lg rounded my-5 pt-5 pb-3">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            placeholder="Name"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Street</Label>
          <Input
            name="address"
            placeholder="Street"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            name="city"
            placeholder="City"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            name="state"
            placeholder="State"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="zip">Zip Code</Label>
          <Input
            name="zip"
            placeholder="zip"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label name="court type">Court Type</Label>
          <select onChange={handleChange}>
            <option value="">-Choose Court Type-</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="rubber">Rubber</option>
          </select >
        </FormGroup>
        <FormGroup>
          <Label name="number of players">Number of Players</Label>
          <select onChange={handleChange}>
            <option value="">-Choose players-</option>
            {Array.from({ length: 20 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </FormGroup>
        <Button onClick={handleSubmit} className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default CourtNew;
