import axios from 'axios';
import Logger from 'js-logger';

const LoginService = {
  signIn: async (email, password) => {
    try {
      const params = {
        player: {
          email,
          password,
        },
      };
      const { headers } = await axios.post('/players/sign_in', params);
      const accessToken = headers.authorization.split(' ').pop();
      return accessToken;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  },
  signUp: async (firstName, lastName, email, password) => {
    try {
      const params = {
        player: {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        },
      };
      const { headers } = await axios.post('/players/sign_up', params);
      const accessToken = headers.authorization.split(' ').pop();
      return accessToken;
    } catch (error) {
      Logger.error(error);

      const { message } = error.response.data.errors.pop();
      throw new Error(message);
    }
  },
};

export default LoginService;
