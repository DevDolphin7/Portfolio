import { useState, createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const ThemeContext = createContext();

export const ProvideTheme = ({ children }) => {
  // Use OS settings for default value, if can't be found defaults to light.
  let osDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(osDarkMode ? "dark" : "light");
  const themes = defineThemes();

  return (
    <ThemeContext.Provider value={{ themes, theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function defineThemes() {
  return {
    light: createTheme({
      palette: {
        mode: "light",
        background: { default: "#FEFEFF", paper: "#F7F7F8" },
        primary: { main: "#3E8299" },
        secondary: { main: "#5698AD" },
      },
    }),
    dark: createTheme({
      palette: {
        mode: "dark",
        background: { default: "#201D21", paper: "#110811" },
        primary: { main: "#3E8299" },
        secondary: { main: "#5698AD" },
      },
    }),
  };
}
