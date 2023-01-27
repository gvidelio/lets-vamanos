import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Header() {
  const navItems = ["Home", "About", "Stories", "Contact"];

  const nav = navItems.map((item) => {
    return (
      <Link
        href={`/${item === "Home" ? "" : item.toLowerCase()}`}
        color="inherit"
        noWrap
        variant="body2"
        sx={{ p: 1, m: "auto", fontSize: 18 }}
      >
        {item}
      </Link>
    );
  });

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 24,
          p: 1,
        }}
      >
        <Link
          color="inherit"
          align="center"
          noWrap
          underline="none"
          href="/"
          fontFamily="Times New Roman"
          height={36}
          sx={{ display: "flex", alignItems: "center", maxWidth: "1200px" }}
        >
          Let's Vamanos
        </Link>
      </Box>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "space-between",
          overflowX: "auto",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        {nav}
      </Toolbar>
    </React.Fragment>
  );
}
