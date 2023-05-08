import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';

import './Header.css';

import { PlayersService } from '../../services';
import useAccessToken from '../../hooks/Auth';

function Header() {
  const [playerId, setPlayerId] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    (async () => {
      const user = await PlayersService.me();
      setPlayerId(user.id);
      setEmail(user.email);
    })();
  }, []);

  const tokenManager = useAccessToken();

  const signOut = () => {
    tokenManager.clear();
  };

  return (
    <Navbar className="Header" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Spinny</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            {tokenManager.get() && (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin/players">
                  Players
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          {tokenManager.get() ? (
            <Nav>
              <NavDropdown title={email} id="basic-nav-dropdown">
                <NavDropdown.Item href={`/players/${playerId}`}>
                  Your profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => signOut()}>
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Button
                variant="outline-primary"
                className="me-2"
                href="/users/sign_in"
              >
                Sign in
              </Button>
              <Button variant="primary" href="/users/sign_up">
                Sign up
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
