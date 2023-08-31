import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form, Row } from 'react-bootstrap';
import validator from 'validator';

import { LoginService } from '../../services';
import useTokenManager from '../../hooks/UseTokenManager';
import { AuthContext } from '../../context/AuthProvider';

import './SignUp.css';

class ValidationSchema {
  constructor(
    firstName = null,
    lastName = null,
    email = null,
    password = null,
    message = null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.message = message;
  }
}

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [validated, setValidated] = useState(false);
  const [validationSchema, setValidationSchema] = useState(
    new ValidationSchema()
  );
  const [signUpButtonText, setSignUpButtonText] = useState('Sign up');
  const navigateToPlayers = useNavigate();
  const tokenManager = useTokenManager();
  const { setLoggedIn } = useContext(AuthContext);

  const getValidationSchema = () => {
    const schema = new ValidationSchema();
    if (!email) {
      schema.email = 'The email is required.';
    }
    if (email && !validator.isEmail(email)) {
      schema.email = 'The email is not valid.';
    }
    if (!firstName) {
      schema.firstName = 'The first name is required.';
    }
    if (!lastName) {
      schema.lastName = 'The last name is required.';
    }
    if (!password) {
      schema.password = 'The password is required.';
    }
    if (password && password.length < 6) {
      schema.password = 'The password must be at least 6 characters.';
    }
    return schema;
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity()) {
      try {
        setValidationSchema(new ValidationSchema());
        setSignUpButtonText('Signing up...');

        const accessToken = await LoginService.signUp(
          firstName,
          lastName,
          email,
          password
        );
        tokenManager.set(accessToken);
        setLoggedIn(true);
        navigateToPlayers('/admin/players');
      } catch (error) {
        const schema = new ValidationSchema();
        schema.message = error.message;

        setValidationSchema(schema);
        setLoggedIn(false);
        setSignUpButtonText('Sign up');
      }
    } else {
      const schema = getValidationSchema();
      if (Object.keys(schema).length) {
        setValidationSchema(schema);
      }
    }
    setValidated(true);
  };

  const showAlert = () => (
    <Alert variant="danger" transition dismissible>
      {validationSchema.message}
    </Alert>
  );

  return (
    <>
      <Row>{validationSchema.message && showAlert()}</Row>
      <Row>
        <Form
          className="form-sign-up"
          validated={validated}
          onSubmit={handleSubmit}
          noValidate
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              {validationSchema.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              {validationSchema.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              {validationSchema.lastName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              {validationSchema.password}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" type="submit">
              {signUpButtonText}
            </Button>
          </div>
          <div className="text-center mt-3">
            <p>
              Already a member? <a href="/users/sign_in">Sign in</a>
            </p>
          </div>
        </Form>
      </Row>
    </>
  );
}

export default SignUp;
