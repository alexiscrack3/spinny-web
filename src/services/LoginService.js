import axios from 'axios';

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
      console.log(error);
      throw error;
    }
  },
};

export default LoginService;
