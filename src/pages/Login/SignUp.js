import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form, Row } from 'react-bootstrap';

import { LoginService } from '../../services';
import useTokenManager from '../../hooks/UseTokenManager';
import { AuthContext } from '../../context/AuthProvider';

import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [validated, setValidated] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [SignUpButtonText, setSignUpButtonText] = useState('Sign up');
  const navigateToPlayers = useNavigate();
  const tokenManager = useTokenManager();
  const { setLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity()) {
      try {
        setSignUpButtonText('Signing up...');
        const accessToken = await LoginService.signUp(
          firstName,
          lastName,
          email,
          password
        );
        tokenManager.set(accessToken);
        setHasError(false);
        setLoggedIn(true);
        navigateToPlayers('/admin/players');
      } catch (error) {
        setHasError(true);
        setLoggedIn(false);
        setSignUpButtonText('Sign up');
      }
    }
    setValidated(true);
  };

  const showAlert = () => (
    <Alert variant="danger" transition dismissible>
      This is an alert!
    </Alert>
  );
  return (
    <>
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
              The email is required.
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
              The first name is required.
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
              The last name is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              The password is required.
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
      <Row>{hasError && showAlert()}</Row>
    </>
  );
}

export default SignUp;
