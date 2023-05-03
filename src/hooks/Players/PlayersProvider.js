import React from "react";
import { PlayersService } from "../../services";

const PlayersContext = React.createContext();

const PlayersProvider = (props) => {
  const [players, setPlayers] = React.useState([]);

  React.useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    try {
      const players = await PlayersService.getPlayers()
      setPlayers(players);
    } catch (error) {
      console.log(error);
      setPlayers([]);
    }
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};

export { PlayersContext, PlayersProvider };
