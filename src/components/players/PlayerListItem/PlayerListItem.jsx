import React from 'react';
import './PlayerListItem.css';

function PlayerListItem({ player }) {
  return (
    <div className="player-list-item">
      <p id={`player_${player.id}`}>
        {player.first_name} {player.last_name}
      </p>
    </div>
  );
}

export default PlayerListItem;
