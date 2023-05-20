import React, { useContext } from 'react';

import './PlayerCounter.css';

import { PlayersContext } from '../../../context/PlayersProvider';

function PlayerCounter() {
  const { players } = useContext(PlayersContext);
  return <p>Number of players: {players.length}</p>;
}

export default PlayerCounter;
