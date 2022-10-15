import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import images from "../images";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Layout() {
  const imagesData = images.map((image) => {
    return (
      <Grid item xs={12} sm={image.width}>
        <Card image={image} />
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1, margin: "auto" }}>
      <Hero />
      <Grid
        sx={{ width: "1", margin: "auto" }}
        container
        spacing={3}
        maxWidth={1200}
      >
        {imagesData}
      </Grid>
      <Footer />
    </Box>
  );
}
