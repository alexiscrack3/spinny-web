import React, { useState, useEffect, createContext } from 'react';
import Logger from 'js-logger';
import { PlayersService } from '../../services';

const PlayersContext = createContext();

function PlayersProvider({ children }) {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const result = await PlayersService.getPlayers();
      setPlayers(result);
    } catch (error) {
      Logger.error(error);
      setPlayers([]);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <PlayersContext.Provider value={players}>
      {children}
    </PlayersContext.Provider>
  );
}

export { PlayersContext, PlayersProvider };
