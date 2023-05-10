import React, { useContext } from 'react';
import { Container, Row, Col, Button, Stack, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs';
import { PlayersContext } from '../../../hooks/Players/PlayersProvider';
import './PlayerList.css';

function PlayerList() {
  const players = useContext(PlayersContext);
  const navigateToPlayer = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <h1>Players</h1>
        </Col>
        <Col>
          <Button
            variant="primary"
            className="float-end"
            href="/admin/players/new"
          >
            Add player <BsPlusCircleFill />
          </Button>
        </Col>
      </Row>
      <Row>
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
            {(players ?? []).map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.email}</td>
                <td>{player.first_name}</td>
                <td>{player.last_name}</td>
                <td>
                  <Stack direction="horizontal" gap={2}>
                    <Button
                      variant="secondary"
                      onClick={() =>
                        navigateToPlayer(`/admin/players/${player.id}`)
                      }
                    >
                      Update
                    </Button>
                    <Button variant="danger">Delete</Button>
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default PlayerList;
