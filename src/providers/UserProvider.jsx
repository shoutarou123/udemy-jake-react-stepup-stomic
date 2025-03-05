import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "じゃけぇ";

  return <UserContext value={{ contextName }}>{children}</UserContext>;
};
