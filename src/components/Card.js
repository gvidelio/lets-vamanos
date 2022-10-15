import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ image }) {
  return (
    <Card
      sx={{
        "&:hover": { transform: "scale(1.02)", transition: "0.4s ease" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="420"
          image={image.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
