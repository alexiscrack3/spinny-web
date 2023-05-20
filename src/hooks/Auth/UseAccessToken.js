import { useState } from 'react';

function useAccessToken() {
  const [accessToken, setAccessToken] = useState(null);

  const get = () => {
    const value = localStorage.getItem('access_token');
    setAccessToken(value);
    return value;
  };

  const set = (token) => {
    localStorage.setItem('access_token', token);
    setAccessToken(token);
  };

  const clear = () => {
    localStorage.removeItem('access_token');
    setAccessToken(null);
  };

  return {
    accessToken,
    get,
    set,
    clear,
  };
}

export default useAccessToken;
