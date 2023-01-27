import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Box sx={{ p: 3, pt: 0 }} className="About">
      <Typography
        component="h1"
        variant="h1"
        align="center"
        sx={{ fontSize: 40, fontWeight: 400, mb: 5, mt: 5 }}
      >
        About Let's Vamanos
      </Typography>
      <Grid sx={{ pb: 5, maxWidth: 1200, margin: "auto" }} container>
        <Grid item xs={12} align={"center"} mb={5}>
          <img
            className="About--img"
            src="https://i.imgur.com/z8OP18V.jpg"
            alt=""
          />
        </Grid>
        <Grid sx={{ flexDirection: "column" }} maxWidth={1200} item xs={12}>
          <Typography component="h4" variant="h4" align="left" mb={2}>
            Yellowstone
          </Typography>
          <Typography
            component="p"
            variant="p"
            align="left"
            mb={2}
            sx={{ fontSize: 21, mb: 2 }}
          >
            The begining was rather simple. Miguel and I met on a lowkey
            volleyball court in Grant Village. Second to the smallest village in
            whole Yellowstone. Socializing event, a friendly match with random
            teams. <br />
            <br />
            First thing Miguelito remembers from me: "You dress like a homeless
            man". And to me it was both: a joke and a personal opinion. But
            little did I know that this person with different clothes is going
            to invade the small circle of my closest people. <br />
            <br /> During the first half of the summer we probably spent 99% of
            the time together we could spend. We both believe that there was a
            mutual learning. Before Yellowstone Miguel did not know Lithuania
            exsisted.
          </Typography>
          <Typography component="h4" variant="h4" align="left" mb={2}>
            Aftermath
          </Typography>
          <Typography
            component="p"
            variant="p"
            align="left"
            mb={2}
            sx={{ fontSize: 21 }}
          >
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. <br />
            <br />
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from repetition, injected humour, or non-characteristic words etc.
          </Typography>
          <Typography
            component="p"
            variant="p"
            align="left"
            mb={2}
            sx={{ fontSize: 21 }}
          ></Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
