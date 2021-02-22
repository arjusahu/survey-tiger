import React from "react";
import { Form } from "react-bootstrap";

const Dropdown = ({ handleChange }) => {
  return (
    <div className="dropdown mx-auto">
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Control as="select" onChange={handleChange}>
          <option>Select Question Type</option>
          <option>Multi-Select</option>
          <option>Single-Select</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Dropdown;
