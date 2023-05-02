import Container from "react-bootstrap/Container";
import { Header } from "./Header";
import { Body } from "./Body";

import "./Layout.css";

export function Layout({ children }) {
  return (
    <div>
      <Container fluid className="App"r>
        <Header />
        <Body>
          {children}
        </Body>
      </Container>
    </div>
  );
}
