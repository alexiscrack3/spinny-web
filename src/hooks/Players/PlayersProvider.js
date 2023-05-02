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
      console.log(`ENV = ${process.env.REACT_APP_BASE_URL}`);
      const config = {
        headers: {
          Authorization: "Bearer token"
        }
      }
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/players`, config);
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
