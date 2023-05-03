import { useState } from "react";

const useAccessToken = () => {
  const get = () => {
    const accessToken = localStorage.getItem("access_token");
    return accessToken;
  };

  const set = (accessToken) => {
    localStorage.setItem("access_token", accessToken);
    setAccessToken(accessToken);
  };

  const [accessToken, setAccessToken] = useState(get());

  return {
    get,
    set,
  };
};

export { useAccessToken };
