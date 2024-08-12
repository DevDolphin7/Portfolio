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
        text: { primary: "#201D21", secondary: "#100610" },
      },
      typography: {
        fontFamily: [
          "Lucida Sans",
          "Lucida Sans Regular",
          "Lucida Grande",
          "Lucida Sans Unicode",
          "Geneva",
          "Verdana",
          "sans-serif",
        ],
        fontSize: 16,
        h1: { fontSize: 64 },
        h2: { fontSize: 44 },
        button: { fontWeight: 600 },
      },
    }),
    dark: createTheme({
      palette: {
        mode: "dark",
        background: { default: "#201D21", paper: "#100610" },
        primary: { main: "#3E8299" },
        secondary: { main: "#5698AD" },
        text: { primary: "#FEFEFF", secondary: "#F7F7F8" },
      },
      typography: {
        fontFamily: [
          "Lucida Sans",
          "Lucida Sans Regular",
          "Lucida Grande",
          "Lucida Sans Unicode",
          "Geneva",
          "Verdana",
          "sans-serif",
        ],
        fontSize: 16,
        h1: { fontSize: 64 },
        h2: { fontSize: 44 },
        button: { fontWeight: 600 },
      },
    }),
  };
}
