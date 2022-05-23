import React from "react";
import Container from "react-bootstrap/Container";
import { PlayerForm } from "../../components/players/PlayerForm";
import "./NewPlayer.css";

export function NewPlayer({ players, setPlayers }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const addPlayer = () => {
    const player = {
      id: players.length + 1,
      first_name: firstName,
      last_name: lastName,
    };
    const allPlayers = [...players];
    allPlayers.push(player);
    setPlayers(allPlayers);
    setFirstName("");
    setLastName("");
  };

  return (
    <Container>
      <PlayerForm
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        onClick={() => addPlayer()}
      />
    </Container>
  );
}
