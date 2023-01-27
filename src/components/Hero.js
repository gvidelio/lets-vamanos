import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./MainFeaturedPost";

const mainFeaturedPost = {
  title: "It's not a name - it's a philosophy",
  description:
    "Let's Vamanos was founded as a hobby from the most unlikely friendship: Equadorian and Lithuanian guys who met in Yellowstone...",
  image:
    "https://images.unsplash.com/photo-1663875967691-15b02702931c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const theme = createTheme();

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} sx={{ p: { xs: 0 } }}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
    </ThemeProvider>
  );
}
