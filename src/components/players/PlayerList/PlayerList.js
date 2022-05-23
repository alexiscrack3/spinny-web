import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import "./PlayerList.css";

export function PlayerList(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h1>Players</h1>
          </Col>
          <Col>
            <Button variant="primary" className="float-end" href="/players/new">Add Player</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.players.map((player, index) => (
              <tr key={index}>
                <td>{player.id}</td>
                <td>{player.email}</td>
                <td>{player.first_name}</td>
                <td>{player.last_name}</td>
                <td>TODO</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}
