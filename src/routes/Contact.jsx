import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BackgroundPaper from "../components/BackgroundPaper";

export default function Contact() {
  return (
    <BackgroundPaper>
      <Grid container spacing={2} sx={{ margin: 2 }} direction="column">
        <Typography variant="h1" component="h1" gutterBottom textAlign="center">
          Contact
        </Typography>
        <Typography variant="h5" component="div" sx={{ margin: "50px 10px" }}>
          Email:{" "}
          <Link to="mailto:DevDolphin7@outlook.com">
            DevDolphin7@outlook.com
          </Link>
        </Typography>
        <Typography variant="h5" component="div" sx={{ margin: "50px 10px" }}>
          Location: Leamington Spa
        </Typography>
      </Grid>
    </BackgroundPaper>
  );
}
