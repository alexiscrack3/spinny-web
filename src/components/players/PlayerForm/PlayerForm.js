import React from "react";
import { Form, Button } from "react-bootstrap";

import "./PlayerForm.css";

export function PlayerForm(props) {
  const onEmailChange = (event) => {
    let value = event.target.value;
    props.setEmail(value);
  };
  const onFirstNameChange = (event) => {
    let value = event.target.value;
    props.setFirstName(value);
  };
  const onLastNameChange = (event) => {
    let value = event.target.value;
    props.setLastName(value);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={props.email} onChange={onEmailChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" value={props.firstName} onChange={onFirstNameChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" value={props.lastName} onChange={onLastNameChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
