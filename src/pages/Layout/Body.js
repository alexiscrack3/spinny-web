import Container from 'react-bootstrap/Container';

export function Body({children}) {
  return (
    <Container className="Content">
      {children}
    </Container>
  );
}
