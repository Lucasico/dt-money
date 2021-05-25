

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

import { lightTheme } from "../styles/themes/lighTheme";
import { darkTheme } from "../styles/themes/darkTheme";

type themeContextProviderProps = {
  children: ReactNode;
};

type DefaultTheme = {
  backgrond: string;
  colors: {
    blue: string;
    red: string;
    blueLight: string;
    textTitle: string;
    textBody: string;
    shape: string;
    green: string;
    inputsModal: string;
  };
};

type ThemeContextDataProps = {
  stateSwithc: boolean;
  modifieldTheme: (theme: boolean) => void;
  theme: DefaultTheme;
};
const ThemeContextDefaut = createContext({} as ThemeContextDataProps);

export function ModifieldThemeProvider({
  children,
}: themeContextProviderProps) {
  const [stateSwithc, setStateSwithc] = useState(true);
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  useEffect(() => {
    if (stateSwithc) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [stateSwithc, theme]);

  function modifieldTheme(state: boolean) {
    setStateSwithc(!state);
  }

  return (
    <ThemeContextDefaut.Provider value={{ stateSwithc, modifieldTheme, theme }}>
      {children}
    </ThemeContextDefaut.Provider>
  );
}

export function useModifieldTheme() {
  const context = useContext(ThemeContextDefaut);

  return context;
}
