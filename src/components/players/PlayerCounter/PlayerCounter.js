import React from "react";

import "./PlayerCounter.css";

import { PlayersContext } from "../../../hooks/Players/PlayersProvider";

export function PlayerCounter({ counter }) {
  const { players } = React.useContext(PlayersContext);
  return <p>Number of players: {players.length}</p>;
}
