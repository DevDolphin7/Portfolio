import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Paper } from "@mui/material";
import { ThemeContext } from "../../contexts/Theme";
import ToggleTheme from "../ToggleTheme";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import dolphinLight from "../../assets/dolphinLight.gif";
import dolphinDark from "../../assets/dolphinDark.gif";
import Dropdown from "./Dropdown";
import "../../styles/Nav.css";

export default function Nav() {
  const { theme } = useContext(ThemeContext);
  const menu = defineMenu();

  console.log(theme === "light" ? "dropdown-menu-light" : "dropdown-menu-dark");

  return (
    <Paper elevation={12} className="NavBar">
      <Link to={"/Home"}>
        <img
          src={theme === "light" ? dolphinLight : dolphinDark}
          width="64px"
        />
      </Link>
      <h1>Dan Olver</h1>
      <MediaQuery maxWidth={1039}>
        <div className="spacer"></div>
        <Stack
          direction="row"
          sx={{
            minWidth: 64,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <MediaQuery minWidth={450}>
            <ToggleTheme />
          </MediaQuery>
          <Dropdown menu={menu} theme={theme} />
        </Stack>
      </MediaQuery>
      <MediaQuery minWidth={1040}>
        <Stack
          spacing={2}
          direction="row"
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          {menu.map((item) => {
            if (typeof item === "object") {
              const text = Object.keys(item)[0];
              return item["--component--"] ? null : (
                <Button
                  key={text}
                  variant="contained"
                  size="large"
                  onClick={Object.values(item)[0]}
                >
                  {text}
                </Button>
              );
            }
          })}
        </Stack>
        <div className="spacer"></div>
        <ToggleTheme />
      </MediaQuery>
    </Paper>
  );
}

export function defineMenu() {
  const navigate = useNavigate();

  return [
    "Welcome",
    "--divider--",
    { Home: () => navigate("/Home") },
    { Projects: () => navigate("/Projects") },
    { Interests: () => navigate("/Interests") },
    { Contact: () => navigate("/Contact") },
    { "--component--": <ToggleTheme /> },
  ];
}
