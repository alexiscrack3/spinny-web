import axios from 'axios';
import Logger from 'js-logger';

const PlayersService = {
  getProfile: async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      };
      const { data } = await axios.get('/players/me', config);
      return data.data;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  },
  getPlayers: async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      };
      const { data } = await axios.get(`/players`, config);
      return data.data;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  },
  getPlayerById: async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      };
      const { data } = await axios.get(`/players/${id}`, config);
      return data.data;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  },
};

export default PlayersService;
