import Card from "@mui/material/Card";

export default function HeaderCard(props) {
  return (
    <Card
      elevation={12}
      sx={{
        minHeight: 300,
        width: "90vw",
        minWidth: 200,
        maxWidth: "95vw",
      }}
    >
      {props.children}
    </Card>
  );
}
