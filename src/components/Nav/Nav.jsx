import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Paper } from "@mui/material";
import { ThemeContext } from "../../contexts/Theme";
import ToggleTheme from "../ToggleTheme";
import dolphinLight from "../../assets/dolphin.gif";
import dolphinDark from "../../assets/dolphinDark.gif";
import Dropdown from "./Dropdown";
import "../../styles/Nav.css";

export default function Nav() {
  const { theme } = useContext(ThemeContext);
  const menu = defineMenu();

  return (
    <Paper elevation={12} className="NavBar">
      <Link to={"/Home"}>
        {
          <img
            src={theme === "light" ? dolphinLight : dolphinDark}
            width="64px"
          />
        }
      </Link>
      <h1>Dan Olver</h1>
      <Dropdown menu={menu} />
    </Paper>
  );
}

export function defineMenu() {
  const navigate = useNavigate();

  return [
    "Welcome",
    "--divider--",
    { Home: () => navigate("/Home") },
    { "--component--": <ToggleTheme /> },
  ];
}
