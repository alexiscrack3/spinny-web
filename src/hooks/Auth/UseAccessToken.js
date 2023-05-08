import { useState } from 'react';

function useAccessToken() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('access_token')
  );

  const get = () => accessToken;

  const set = (token) => {
    localStorage.setItem('access_token', token);
    setAccessToken(token);
  };

  const clear = () => {
    localStorage.removeItem('access_token');
    setAccessToken(undefined);
  };

  return {
    get,
    set,
    clear,
  };
}

export default useAccessToken;
