import React, { useState, createContext, useMemo, useEffect } from 'react';
import useTokenManager from '../hooks/UseTokenManager';

const AuthContext = createContext({
  isLoggedIn: undefined,
  setLoggedIn: undefined,
});

function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const authMemo = useMemo(() => ({ isLoggedIn, setLoggedIn }), [isLoggedIn]);
  const tokenManager = useTokenManager();

  useEffect(() => {
    const accessToken = tokenManager.get();
    setLoggedIn(!!accessToken);
  }, []);

  return (
    <AuthContext.Provider value={authMemo}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
