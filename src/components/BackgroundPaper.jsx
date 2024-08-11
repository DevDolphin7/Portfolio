import Paper from "@mui/material/Paper";

export default function BackgroundPaper(props) {
  return (
    <Paper
      elevation={6}
      sx={{
        width: "95vw",
        padding: "2.5vh 0",
        minWidth: 200,
        margin: "20px 2.5vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {props.children}
    </Paper>
  );
}
