import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";
import { FormControlLabel, Switch } from "@mui/material";

export default function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((currTheme) => {
      return currTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <FormControlLabel
      label={theme.charAt(0).toUpperCase() + theme.slice(1)}
      control={<Switch onClick={toggleTheme} />}
    />
  );
}
