import React from 'react';

import { PlayersProvider } from '../../context/PlayersProvider';
import PlayerList from '../../components/players/PlayerList';
import PlayerCounter from '../../components/players/PlayerCounter';

import './Players.css';

function Players() {
  return (
    <PlayersProvider>
      <PlayerList />
      <PlayerCounter />
    </PlayersProvider>
  );
}

export default Players;
