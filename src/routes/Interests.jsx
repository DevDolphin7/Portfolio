import { Typography, Grid } from "@mui/material";
import BackgroundPaper from "../components/BackgroundPaper";
import InterestCard from "../components/InterestCard";
import data from "../data/interests.json";

const interests = data.interests;

export default function Interests() {
  return (
    <BackgroundPaper>
      <Grid container spacing={2} sx={{ margin: 2 }}>
        <Typography variant="h1" component="h1" gutterBottom textAlign="center">
          My Interests
        </Typography>

        {interests.map((interest) => (
          <InterestCard key={interest.title} interest={interest} />
        ))}
      </Grid>
    </BackgroundPaper>
  );
}
