import * as React from "react";
import Hero from "./Hero";
import Box from "@mui/material/Box";
import Stories from "./Stories";

export default function Home() {
  return (
    <Box className="Home">
      <Hero />
      <Stories />
    </Box>
  );
}
