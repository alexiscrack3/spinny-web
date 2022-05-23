import Container from "react-bootstrap/Container";
import { Header } from "./Header";

import "./Layout.css";

export function Layout({ children }) {
  return (
    <div>
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  );
}
