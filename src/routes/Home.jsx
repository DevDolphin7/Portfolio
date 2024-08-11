import { Box, CardMedia, Typography } from "@mui/material";
import BackgroundPaper from "../components/BackgroundPaper";
import HeaderCard from "../components/HeaderCard";
import rPiImage from "../assets/RPi2.png";

export default function Home() {
  return (
    <BackgroundPaper>
      <HeaderCard>
        <CardMedia
          component="img"
          src={rPiImage}
          alt="A close up of a circuit board with a raspberry shaped logo."
          sx={{
            width: "90vw",
            minHeight: 210,
            minWidth: 250,
            maxHeight: 220,
          }}
        ></CardMedia>
        <article style={{ margin: "1rem" }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom>
            Engineer Turned Full-Stack Developer
          </Typography>
          <Typography variant="body1" paragraph>
            Hi, I'm Dan Olver. After a rewarding career as an engineer, I took a
            leap of faith and transitioned into the world of software
            development. My passion for problem-solving, optimisation and
            creating efficient, elegant solutions led me to complete the
            Northcoders Full Stack JavaScript Bootcamp, where I honed my skills
            in modern web development.
          </Typography>
          <Typography variant="body1" paragraph>
            My journey into tech is driven by a desire to build impactful
            projects that combine my engineering background with my new-found
            love for coding. Whether it’s creating robust back-end APIs,
            designing intuitive front-end interfaces, or building innovative
            tools, I’m committed to delivering high-quality, scalable software.
          </Typography>
          <Typography variant="body1" paragraph>
            Some of my recent work includes:
          </Typography>
          <Box component="ul" padding={0} style={{ listStyleType: "none" }}>
            <Typography variant="body1" component="li" paragraph>
              <strong>Dolphin News:</strong> A full-stack news-themed website
              featuring a public API and a responsive front end, built during my
              time at Northcoders.
            </Typography>
            <Typography variant="body1" component="li" paragraph>
              <strong>PDF Comparer with OCR:</strong> A tool that leverages
              Optical Character Recognition to compare and highlight differences
              between PDF documents.
            </Typography>
            <Typography variant="body1" component="li" paragraph>
              <strong>Campervan Conversion:</strong> I transformed a Mercedes
              Sprinter into a fully functional campervan, blending my
              engineering skills with a love for hands-on projects.
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            I’m excited to bring my diverse skill set to the tech industry,
            where I’m eager to collaborate with like-minded professionals and
            contribute to meaningful projects.
          </Typography>
          <Typography variant="body1" paragraph>
            Feel free to explore my portfolio to learn more about my projects,
            skills, and interests. Let's connect and see how we can create
            something amazing together.
          </Typography>
        </article>
      </HeaderCard>
    </BackgroundPaper>
  );
}
