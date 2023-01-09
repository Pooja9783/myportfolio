import React from "react";
import myImage from "../img/my.png";

import { Box, Typography, Grid } from "@mui/material";
const About = () => {
  return (
    <div id="about">
      <Box
        sx={{
          flexGrow: 1,

          color: "#9318EE",
          width: { md: "950px", sm: "auto" },
          margin: "auto",
        }}
        pt={10}
      >
        <Typography
          variant="h4"
          id="heading"
          sx={{
            textAlign: "center",
            borderBottom: "4px solid #2C3333",
            borderLeft: "4px solid #2C3333",
            width: "160px",
            margin: "auto",
          }}
        >
          {" "}
          About Me
        </Typography>

        <Grid container spacing={2} mt={10}>
          <Grid item xs={12} md={4} m={2} mt={5}>
            <img
              src={myImage}
              style={{
                width: "300px",
                height: "300px",
                border: "2px solid #2C3333",
                borderRadius: "50%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              alt={"Pooja"}
            />{" "}
          </Grid>
          <Grid item xs={12} md={7} m={2}>
            <Typography variant="h5" id="heading">
              Having completed my Graduation in Arts, I never thought that I
              would be interested in becoming anything close to a full-stack web
              developer. When I was searching for a job as a data entry operator
              on LinkedIn, I came across a post related to programming. So I
              searched on google about it, got interested, and started to learn
              HTML, CSS & Javascript. Programming attracted me further, and I
              kept pursuing it, and that's when I began my journey towards
              becoming a full-stack web.
              <br />
              <br />I always wanted to have a professional career but couldn't
              figure out my way to a job. So, after completing my Post
              Graduation, I started exploring my career options.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </div>
  );
};

export default About;
