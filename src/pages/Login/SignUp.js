import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form, Row } from 'react-bootstrap';

import { LoginService } from '../../services';
import useTokenManager from '../../hooks/UseTokenManager';
import { AuthContext } from '../../context/AuthProvider';

import './SignUp.css';

class FormParams {
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
  const [formParams, setFormParams] = useState(new FormParams());
  const [SignUpButtonText, setSignUpButtonText] = useState('Sign up');
  const navigateToPlayers = useNavigate();
  const tokenManager = useTokenManager();
  const { setLoggedIn } = useContext(AuthContext);

  const isEmailValid = (emailAddress) => {
    const emailRegex = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;
    return emailRegex.test(emailAddress);
  };

  const getFormParams = () => {
    const input = new FormParams();
    if (!email) {
      input.email = 'The email is required.';
    }
    if (email && !isEmailValid(email)) {
      input.email = 'The email is not valid.';
    }
    if (!firstName) {
      input.firstName = 'The first name is required.';
    }
    if (!lastName) {
      input.lastName = 'The last name is required.';
    }
    if (!password) {
      input.password = 'The password is required.';
    }
    if (password && password.length < 6) {
      input.password = 'The password must be at least 6 characters.';
    }
    return input;
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);

    if (form.checkValidity()) {
      try {
        setFormParams(new FormParams());
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
        const params = new FormParams();
        params.message = error.message;

        setFormParams(params);
        setLoggedIn(false);
        setSignUpButtonText('Sign up');
      }
    } else {
      const params = getFormParams();
      if (Object.keys(params).length) {
        setFormParams(params);
      }
    }
  };

  const showAlert = () => (
    <Alert variant="danger" transition dismissible>
      {formParams.message}
    </Alert>
  );

  return (
    <>
      <Row>{formParams.message && showAlert()}</Row>
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
              {formParams.email}
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
              {formParams.firstName}
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
              {formParams.lastName}
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
              {formParams.password}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" type="submit">
              {SignUpButtonText}
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
