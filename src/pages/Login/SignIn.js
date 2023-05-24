import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form, Row } from 'react-bootstrap';
import validator from 'validator';

import { LoginService } from '../../services';
import useTokenManager from '../../hooks/UseTokenManager';
import { AuthContext } from '../../context/AuthProvider';

import './SignIn.css';

class ValidationSchema {
  constructor(email = null, password = null, message = null) {
    this.email = email;
    this.password = password;
    this.message = message;
  }
}

function SignIn() {
  const [email, setEmail] = useState('alexis@gmail.com');
  const [password, setPassword] = useState('123456');
  const [validated, setValidated] = useState(false);
  const [validationSchema, setValidationSchema] = useState(
    new ValidationSchema()
  );
  const [signInButtonText, setSignInButtonText] = useState('Sign in');
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
    if (!password) {
      schema.password = 'The password is required.';
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
        setSignInButtonText('Signing in...');

        const accessToken = await LoginService.signIn(email, password);
        tokenManager.set(accessToken);
        setLoggedIn(true);
        navigateToPlayers('/admin/players');
      } catch (error) {
        const schema = new ValidationSchema();
        schema.message = error.message;

        setValidationSchema(schema);
        setLoggedIn(false);
        setSignInButtonText('Sign in');
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
          className="Form-SignIn"
          validated={validated}
          onSubmit={handleSubmit}
          noValidate
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              defaultValue="alexis@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              {validationSchema.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              defaultValue="123456"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              {validationSchema.password}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" type="submit">
              {signInButtonText}
            </Button>
          </div>
          <div className="text-center mt-3">
            <p>
              Not a member? <a href="/users/sign_up">Register</a>
            </p>
          </div>
        </Form>
      </Row>
    </>
  );
}

export default SignIn;
