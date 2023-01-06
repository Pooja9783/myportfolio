import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import projectOneImg from "../img/project-1.png";
import projectTwoImg from "../img/project-2.png";
import projectThirdImg from "../img/project-3.png";
import projectFourthImg from "../img/project-4.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Projects = (props) => {
  return (
    <div style={{ background: "#000000" }} id="projects">
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
          Projects
        </Typography>
        <Box p={2}>
          <Carousel responsive={responsive}>
            <Grid item md={6} mx={1} my={5}>
              <div>
                <Paper>
                  <Card sx={{ maxWidth: 345, height: "460px" }}>
                    <CardMedia
                      sx={{ height: 190 }}
                      image={projectOneImg}
                      title="Clone of HealthKart"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Clone of HealthKart
                      </Typography>
                      <Typography variant="body2">
                        Built authentication and integrated it with
                        functionallity of Home Page And Signup & Signin pages.
                      </Typography>
                      <Typography mt={1} variant="body2">
                        Used tech-stack : HTML | CSS | Javascript
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a
                        href="https://github.com/hramdas/HealthKart"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            margin: "5px",
                            bgcolor: "#9318EE",
                            "&:hover": {
                              backgroundColor: "#9318EE",
                            },
                          }}
                        >
                          GIT Link
                        </Button>
                      </a>
                      <a
                        href="https://healthkart.hramdas.in/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#9318EE",
                            "&:hover": {
                              backgroundColor: "#9318EE",
                            },
                          }}
                        >
                          Demo
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Paper>
              </div>
            </Grid>

            <Grid item md={6} mx={1} my={5}>
              <div>
                <Paper>
                  <Card sx={{ maxWidth: 345, height: "460px" }}>
                    <CardMedia
                      sx={{ height: 190 }}
                      image={projectTwoImg}
                      title="Clone of HealthKart"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Clone of Swiggy
                      </Typography>
                      <Typography variant="body2">
                        I have made clone of Swiggy where users can order food.
                        I implemented search functionalities, user
                        authentication, filter, and sorting.
                      </Typography>
                      <Typography mt={1} variant="body2">
                        Used tech-stack : HTML | CSS | Javascript | Nodejs |
                        ReactJs |
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a
                        href="https://github.com/Pooja9783/swiggy-clone"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            margin: "5px",
                            bgcolor: "#9318EE",
                            "&:hover": {
                              backgroundColor: "#9318EE",
                            },
                          }}
                        >
                          GIT Link
                        </Button>
                      </a>
                      <a
                        href="https://swiggy-website-clone.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#9318EE",
                            "&:hover": {
                              backgroundColor: "#9318EE",
                            },
                          }}
                        >
                          Demo
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Paper>
              </div>
            </Grid>

            <Grid item md={6} mx={1} my={5}>
              <div>
                <Paper>
                  <Card sx={{ maxWidth: 345, height: "460px" }}>
                    <CardMedia
                      sx={{ height: 190 }}
                      image={projectThirdImg}
                      title="Clone of HealthKart"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Clone of Gearbest
                      </Typography>
                      <Typography variant="body2">
                        The Landing Page of Gearbest website displays various
                        products and categories, In headers displays search bar,
                        login, and cart pages, created image carousal, and at
                        the bottom section there is a footer.
                      </Typography>
                      <Typography mt={1} variant="body2">
                        Used tech-stack : HTML | CSS | Javascript | Nodejs
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a
                        href="https://github.com/Pooja9783/gearbest"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            margin: "0px 5px ",
                            bgcolor: "#9318EE",
                            "&:hover": {
                              backgroundColor: "#9318EE",
                            },
                          }}
                        >
                          GIT Link
                        </Button>
                      </a>
                      <a
                        href="https://gearbest-clone.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#9318EE",
                            "&:hover": {
                              backgroundColor: "#9318EE",
                            },
                          }}
                        >
                          Demo
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Paper>
              </div>
            </Grid>

            <Grid item md={6} mx={1} my={5}>
              <div>
                <Paper>
                  <Card sx={{ maxWidth: 345, height: "460px" }}>
                    <CardMedia
                      sx={{ height: 190 }}
                      image={projectFourthImg}
                      title="Clone of HealthKart"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Clone of Realme
                      </Typography>
                      <Typography variant="body2">
                        We developed and designed a mobile and other
                        technological products site using ReactJs and Styled
                        components hosted on heroku.
                      </Typography>
                      <Typography mt={1} variant="body2">
                        Used tech-stack :| Nodejs | ReactJs | styled-components
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a
                        href="https://github.com/jaidev3/Realme-Clone"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            margin: "5px",
                            bgcolor: "#9318EE",
                            "&:hover": {
                              backgroundColor: "#9318EE",
                            },
                          }}
                        >
                          GIT Link
                        </Button>
                      </a>
                      <a
                        href="https://realme-masai.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#9318EE",
                            "&:hover": {
                              backgroundColor: "#9318EE",
                            },
                          }}
                        >
                          Demo
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Paper>
              </div>
            </Grid>
          </Carousel>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
