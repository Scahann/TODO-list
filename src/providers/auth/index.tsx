import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

import { LoginParams, User } from "../../components/Auth/typings";
import { indexCreator } from "../../utils";

const CURRENT_USER = "CURRET_USER";

interface AuthContextVariables {
  user?: Omit<User, "password">;
  signIn: (data: LoginParams) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextVariables>({} as AuthContextVariables);

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<User>(
    localStorage.getItem(CURRENT_USER) ? JSON.parse(localStorage.getItem(CURRENT_USER)) : undefined,
  );

  const signIn = useCallback(
    (data: LoginParams): void => {
      const localStorageId = getLocalStorageId(data);
      const existingUser: User = localStorage.getItem(localStorageId)
        ? JSON.parse(localStorage.getItem(localStorageId))
        : undefined;

      if (existingUser) {
        localStorage.setItem(CURRENT_USER, JSON.stringify(existingUser));
        setUser(existingUser);
      } else {
        const newUser: User = {
          ...data,
          token: indexCreator(),
        };
        localStorage.setItem(localStorageId, JSON.stringify(newUser));
        localStorage.setItem(CURRENT_USER, JSON.stringify(user));
        setUser(user);
      }
    },
    [user],
  );

  const logout = (): void => {
    localStorage.removeItem(CURRENT_USER);
    setUser(undefined);
    window.location.reload();
  };

  const memoedValue: AuthContextVariables = useMemo(
    () => ({
      user: user
        ? {
            login: user.login,
            token: user.token,
          }
        : undefined,
      logout,
      signIn,
    }),
    [signIn, user],
  );

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
}

export default function useAuth(): AuthContextVariables {
  return useContext(AuthContext);
}

const getLocalStorageId = (data: LoginParams) => {
  return `${data.login}_${data.password}`;
};
