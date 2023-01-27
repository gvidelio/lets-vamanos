import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import Typography from "@mui/material/Typography";
import stories from "../stories";

export default function Stories() {
  const imagesData = stories.map((story) => {
    return (
      <Grid item xs={12} md={6}>
        <Card story={story} key={story.id} />
      </Grid>
    );
  });

  return (
    <Box p={3} pt={0}>
      <Typography
        component="h3"
        variant="h3"
        align="center"
        sx={{ fontSize: 40, mb: 0, mt: 5 }}
      >
        Latest from the blog
      </Typography>
      <Box sx={{ pb: 5, pt: 2, pr: 3 }}>
        <Grid
          sx={{ width: "1", margin: "auto" }}
          container
          spacing={3}
          maxWidth={1200}
        >
          {imagesData}
        </Grid>
      </Box>
    </Box>
  );
}
