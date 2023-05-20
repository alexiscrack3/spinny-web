import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../context/AuthProvider';
import { PlayersService } from '../../services';
import useTokenManager from '../../hooks/UseTokenManager';

import './NavigationBar.css';

function NavigationBar() {
  const [playerId, setPlayerId] = useState();
  const [email, setEmail] = useState();

  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const tokenManager = useTokenManager();

  const getLoggedInUser = async () => {
    const user = await PlayersService.getProfile();
    setPlayerId(user.id);
    setEmail(user.email);
  };

  const signOut = () => {
    tokenManager.clear();
    setLoggedIn(false);
  };

  useEffect(() => {
    getLoggedInUser();
  }, [isLoggedIn]);

  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Spinny</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            {isLoggedIn && (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin/players">
                  Players
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          {isLoggedIn ? (
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
              <Nav.Link className="d-block d-lg-none" href="/users/sign_in">
                Sign in
              </Nav.Link>
              <Nav.Link className="d-block d-lg-none" href="/users/sign_up">
                Sign up
              </Nav.Link>
              <Button
                variant="outline-primary"
                className="d-none d-lg-block me-2"
                href="/users/sign_in"
              >
                Sign in
              </Button>
              <Button
                className="d-none d-lg-block"
                variant="primary"
                href="/users/sign_up"
              >
                Sign up
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
