import Container from "react-bootstrap/Container";
import { Header } from "./Header";
import { Body } from "./Body";

import "./Layout.css";

export function Layout({ children }) {
  return (
    <Container fluid className="App">
      <Header />
      <Body>
        {children}
      </Body>
    </Container>
  );
}
