import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Contact() {
  return (
    <Box sx={{ p: 3 }} className="Contact">
      <Typography
        component="h1"
        variant="h1"
        align="center"
        sx={{ fontSize: 40, fontWeight: 400, mb: 5, mt: 5 }}
      >
        Let's Vamanos! Get in touch!
      </Typography>
      <Box align="center">
        <Link
          rel="noreferrer"
          href="https://www.instagram.com/"
          sx={{ p: 2, height: "auto" }}
        >
          <InstagramIcon sx={{ color: "text.secondary", fontSize: 40 }} />
        </Link>
        <Link
          sx={{ p: 2 }}
          href="https://www.google.com/search?q=dogs&oq=dogs&aqs=chrome..69i57l2j69i59l2j0i271j69i60l3.1813j0j4&sourceid=chrome&ie=UTF-8"
        >
          <FacebookIcon sx={{ color: "text.secondary", fontSize: 40 }} />
        </Link>
      </Box>
    </Box>
  );
}
