import React from 'react';
import {
  clearSessionStorage,
  getStoredToken,
  getStoredUser,
  saveSession,
} from '../services/session';
import { AUTH_UNAUTHORIZED_EVENT } from '../services/api';

export const UserContext = React.createContext({
  user: null,
  token: null,
  isAuthenticated: false,
  setAuthSession: () => {},
  clearAuthSession: () => {},
  setUser: () => {},
});

export function User({ children }) {
  const [token, setToken] = React.useState(() => getStoredToken());
  const [user, setUserState] = React.useState(() => getStoredUser());

  const clearAuthSession = React.useCallback(() => {
    clearSessionStorage();
    setToken(null);
    setUserState(null);
  }, []);

  const setAuthSession = React.useCallback(({ token: nextToken, user: nextUser }) => {
    saveSession({ token: nextToken, user: nextUser });
    setToken(nextToken || null);
    setUserState(nextUser || null);
  }, []);

  const setUser = React.useCallback(
    (nextUser) => {
      saveSession({ token, user: nextUser });
      setUserState(nextUser);
    },
    [token],
  );

  React.useEffect(() => {
    function handleUnauthorized() {
      clearAuthSession();
    }

    window.addEventListener(AUTH_UNAUTHORIZED_EVENT, handleUnauthorized);

    return () => {
      window.removeEventListener(AUTH_UNAUTHORIZED_EVENT, handleUnauthorized);
    };
  }, [clearAuthSession]);

  const value = React.useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      setAuthSession,
      clearAuthSession,
      setUser,
    }),
    [user, token, setAuthSession, clearAuthSession, setUser],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
