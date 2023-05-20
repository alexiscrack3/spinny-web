import React, { useState, createContext, useMemo } from 'react';

const PlayersContext = createContext([]);

function PlayersProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const playersMemo = useMemo(() => ({ players, setPlayers }), [players]);

  return (
    <PlayersContext.Provider value={playersMemo}>
      {children}
    </PlayersContext.Provider>
  );
}

export { PlayersProvider, PlayersContext };
