import React from 'react';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';
import Body from './Body';

import './Layout.css';

function Layout({ children }) {
  return (
    <Container fluid className="App">
      <NavigationBar />
      <Body>{children}</Body>
    </Container>
  );
}

export default Layout;
