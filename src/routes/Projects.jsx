import { Typography, Grid } from "@mui/material";
import BackgroundPaper from "../components/BackgroundPaper";
import ProjectCard from "../components/ProjectCard";
import data from "../data/projects.json";

const projects = data.projects;

export default function Projects() {
  return (
    <BackgroundPaper>
      <Grid container spacing={2} sx={{ margin: 2 }}>
        <Typography variant="h1" component="h1" gutterBottom textAlign="center">
          My Projects
        </Typography>

        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Grid>
    </BackgroundPaper>
  );
}
