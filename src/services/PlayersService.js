import axios from "axios";

const PlayersService = {
  me: async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      };
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/players/me`,
        config
      );
      return data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getPlayers: async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      };
      console.log(`ENV = ${process.env.REACT_APP_BASE_URL}`);
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/players`,
        config
      );
      return data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export { PlayersService };