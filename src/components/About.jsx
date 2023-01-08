import React from "react";
import myImage from "../img/my.png";

import { Box, Typography, Grid } from "@mui/material";
const About = () => {
  return (
    <div style={{ background: "#000000" }} id="about">
      <Box
        sx={{
          flexGrow: 1,
          background: "#000000",
          color: "#9318EE",
          width: { md: "950px", sm: "auto" },
          margin: "auto",
        }}
        pt={10}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#FFFFFF",
            textAlign: "center",
            borderBottom: "4px solid #9318EE",
            borderLeft: "4px solid #9318EE",
            width: "160px",
            margin: "auto",
          }}
        >
          {" "}
          About Me
        </Typography>

        <Grid container spacing={2} mt={10}>
          <Grid item xs={12} md={4} m={2} sx={{ margin: { md: "auto" } }}>
            <img
              src={myImage}
              style={{ width: "300px", height: "300px" }}
              alt={"Pooja"}
            />{" "}
          </Grid>
          <Grid item xs={12} md={7} m={2}>
            <Typography variant="h5" color="#FFFFFF">
              Having completed my Graduation in Arts, I never thought that I
              would be interested in becoming anything close to a full-stack web
              developer. When I was searching for a job as a data entry operator
              on LinkedIn, I came across a post related to programming. So I
              searched on google about it, got interested, and started to learn
              HTML, CSS & Javascript. Programming attracted me further, and I
              kept pursuing it, and that's when I began my journey towards
              becoming a full-stack web.
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
