import { createContext } from "react";
import { theme } from "./theme";

type ThemeProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}