import React from "react";

import { PlayersProvider } from "../../hooks/Players/PlayersProvider";
import { PlayerList } from "../../components/players/PlayerList";
import { PlayerCounter } from "../../components/players/PlayerCounter";

import "./Players.css";

export function Players() {
  return (
    <React.Fragment>
      <PlayersProvider>
        <PlayerList />
        <PlayerCounter />
      </PlayersProvider>
    </React.Fragment>
  );
}
