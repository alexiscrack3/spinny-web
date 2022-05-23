import React from "react";
import { PlayerListItem } from "../PlayerListItem";
import "./PlayerList.css";

export function PlayerList(props) {
  return (
    <div id="player-list" className="player-list">
      {props.players.map((player) => (
        <PlayerListItem key={player.id} player={player} />
      ))}
    </div>
  );
}
