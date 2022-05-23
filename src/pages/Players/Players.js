import React from "react";

import { PlayerList } from "../../components/players/PlayerList";
import { PlayerCounter } from "../../components/players/PlayerCounter";

import axios from "axios";

import "./Players.css";

export function Players() {
  const [players, setPlayers] = React.useState([]);

  React.useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/players");
      setPlayers(data.data);
    } catch (error) {
      console.log(error);
      setPlayers([]);
    }
  };

  return (
    <React.Fragment>
      <PlayerList players={players} />
      <PlayerCounter counter={players.length} />
    </React.Fragment>
  );
}
