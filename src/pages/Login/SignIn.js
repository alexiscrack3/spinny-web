import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import { LoginService } from '../../services';
import useAccessToken from '../../hooks/Auth';
import { AuthContext } from '../../context/AuthProvider';

import './SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('alexis@gmail.com');
  const [password, setPassword] = useState('123456');
  const [validated, setValidated] = useState(false);
  const [signInButtonText, setSignInButtonText] = useState('Sign in');
  const navigateToPlayers = useNavigate();
  const tokenManager = useAccessToken();
  const { setLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity()) {
      setSignInButtonText('Signing in...');
      try {
        const accessToken = await LoginService.signIn(email, password);
        tokenManager.set(accessToken);
        setLoggedIn(true);
        navigateToPlayers('/admin/players');
      } catch (error) {
        setLoggedIn(false);
        setSignInButtonText('Sign in');
      }
    }
    setValidated(true);
  };

  return (
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
          The email is required.
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
          The password is required.
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
  );
}

export default SignIn;
