import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { PlayersService } from "../../services/PlayersService";

import "./PlayerDetails";

const PlayerDetails = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState();

  useEffect(() => {
    (async () => {
      try {
        const player = await PlayersService.getPlayerById(id);
        setPlayer(player);
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
};

export { PlayerDetails };
