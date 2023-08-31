import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Stack, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logger from 'js-logger';
import { BsPlusCircleFill } from 'react-icons/bs';
import { PlayersService } from '../../../services';
import { PlayersContext } from '../../../context/PlayersProvider';
import './PlayerList.css';

function PlayerList() {
  const { players, setPlayers } = useContext(PlayersContext);
  const navigateToPlayer = useNavigate();

  const getPlayers = async () => {
    try {
      const result = await PlayersService.getPlayers();
      setPlayers(result);
    } catch (error) {
      Logger.error(error);
      setPlayers([]);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

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
            {players.map((player) => (
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
