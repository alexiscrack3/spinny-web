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
      const accessToken = headers.getAuthorization().split(' ').pop();
      return accessToken;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  },
};

export default LoginService;
