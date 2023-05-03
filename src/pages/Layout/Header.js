import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./Header.css";

import { useAccessToken } from "../../hooks/Auth";

export function Header() {
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
            {tokenManager.get() ? (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin/players">
                  Players
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <></>
            )}
          </Nav>
          {tokenManager.get() ? (
            <Nav>
              <Button variant="outline-primary" onClick={() => signOut()}>
                Sign out
              </Button>
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
