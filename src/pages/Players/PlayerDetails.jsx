import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PlayersService from '../../services/PlayersService';

function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState();

  useEffect(() => {
    (async () => {
      try {
        const result = await PlayersService.getPlayerById(id);
        setPlayer(result);
      } catch (error) {
        setPlayer(null);
      }
    })();
  }, []);

  return (
    <Container>
      <h1>{id}</h1>
      <h1>{player && player.first_name}</h1>
      <h1>{player && player.email}</h1>
    </Container>
  );
}

export default PlayerDetails;
