import { Card, Typography, CardMedia, CardContent, Box } from "@mui/material";

export default function ProjectCard({ project }) {
  return (
    <Card elevation={4} sx={{width: "90vw", minWidth: 200, minHeight: 500, margin: 2}}>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            <strong>Languages & Tools:</strong> {project.languages}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
