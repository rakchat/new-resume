import { Dispatch, SetStateAction, createContext } from "react";

interface IContext {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<Partial<IContext>>({});
