import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Let's Vamanos
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      className="footer"
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: 6,
        mt: "0 0",
        borderTop: 1,
        mt: "auto",
        borderColor: "divider",
      }}
    >
      <Container>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          sx={{
            mb: 1.5,
          }}
        >
          We say "fugget about it" and LET'S VAMANOS!
        </Typography>
        <Box align="center">
          <Link
            rel="noreferrer"
            href="https://www.instagram.com/letsvamanostravelblog/"
          >
            <InstagramIcon sx={{ color: "text.secondary" }} />
          </Link>
          <Link
            rel="noreferrer"
            href="https://www.google.com/search?q=dogs&oq=dogs&aqs=chrome..69i57l2j69i59l2j0i271j69i60l3.1813j0j4&sourceid=chrome&ie=UTF-8"
          >
            <FacebookIcon sx={{ color: "text.secondary" }} />
          </Link>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}
