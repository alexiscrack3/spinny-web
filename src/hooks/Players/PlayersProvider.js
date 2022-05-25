import React from "react";
import axios from "axios";

const PlayersContext = React.createContext();

const PlayersProvider = (props) => {
  const [players, setPlayers] = React.useState([]);

  React.useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    try {
      console.log(`ENV = ${process.env.BASE_URL}`);
      const { data } = await axios.get(`${process.env.BASE_URL}/players`);
      setPlayers(data.data);
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
