import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ story }) {
  return (
    <Card
      sx={{
        "&:hover": {
          transform: "scale(1.02)",
          transition: "0.4s ease",
        },

        height: "100%",
      }}
    >
      <CardActionArea href={`/stories/${story.id}`}>
        <CardMedia component="img" height="420" image={story.url} alt="" />
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary">
            {story.date}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {story.header}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
