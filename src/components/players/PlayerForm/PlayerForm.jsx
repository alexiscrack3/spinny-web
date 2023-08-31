import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './PlayerForm.css';

function PlayerForm({
  email,
  firstName,
  lastName,
  setEmail,
  setFirstName,
  setLastName,
}) {
  const onEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };
  const onFirstNameChange = (event) => {
    const { value } = event.target;
    setFirstName(value);
  };
  const onLastNameChange = (event) => {
    const { value } = event.target;
    setLastName(value);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={onEmailChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={onFirstNameChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={onLastNameChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default PlayerForm;
