import React from "react";
import { PlayerListItem } from "../PlayerListItem";
import "./PlayerList.css"

const players = [
  {
    id: 1,
    first_name: "Armando",
    last_name: "Ortega",
  },
  {
    id: 2,
    first_name: "Alexis",
    last_name: "Ortega",
  },
  {
    id: 3,
    first_name: "Alec",
    last_name: "Ortega",
  },
];

export function PlayerList() {
  return (
    <div id="player_list" className="player-list">
      {players.map((player) => (
        <PlayerListItem key={player.id} player={player} />
      ))}
    </div>
  );
}
