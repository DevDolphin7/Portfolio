import { Card, Typography, CardMedia, CardContent, Box } from "@mui/material";

export default function InterestCard({ interest }) {
  return (
    <Card
      elevation={4}
      sx={{ width: "90vw", minWidth: 200, minHeight: 500, margin: 2 }}
    >
      <CardMedia
        component="img"
        height="200"
        image={interest.image}
        alt={interest.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {interest.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {interest.description}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            <strong>Topic:</strong> {interest.topic}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
