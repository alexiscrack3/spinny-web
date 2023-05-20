import React, { useState, createContext, useMemo, useEffect } from 'react';
import useAccessToken from '../hooks/Auth';

const AuthContext = createContext(false);

function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const authMemo = useMemo(() => ({ isLoggedIn, setLoggedIn }), [isLoggedIn]);
  const tokenManager = useAccessToken();

  useEffect(() => {
    const accessToken = tokenManager.get();
    setLoggedIn(!!accessToken);
  }, []);

  return (
    <AuthContext.Provider value={authMemo}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
