import axios from 'axios';

const InitializeAxios = () => {
  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
  axios.defaults.withCredentials = true;
};

export default InitializeAxios;
