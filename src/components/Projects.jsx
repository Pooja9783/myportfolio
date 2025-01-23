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

const responsive = {
  superLargeDesktop: {
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

const Projects = () => {
  return (
    <div id="projects">
      <Box
        sx={{
          flexGrow: 1,
          color: "#9318EE",
          width: { md: "950px", sm: "auto" },
          margin: "auto",
        }}
        pt={10}
        id="projectBox"
      >
        <Typography
          variant="h4"
          id="heading"
          sx={{
            textAlign: "center",
            borderBottom: "4px solid #2C3333",
            borderLeft: "4px solid #2C3333",
            width: "140px",
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
                  <Card
                    sx={{
                      maxWidth: 345,
                      height: "460px",
                    
                    }}
                  >
                    <CardMedia
                      sx={{ height: 190, border:'6px solid #E7F6F2' }}
                      image={projectOneImg}
                      title="Shop Bazar"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Shop Bazar
                      </Typography>
                      <Typography variant="body2">
                        An easy-to-use e-commerce app with login/signup, product
                        filtering, shopping cart, and secure payment.
                      </Typography>
                      <Typography mt={1} variant="body2">
                        Used tech-stack :Reactjs | Javascript | HTML | CSS |
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a
                        href="https://github.com/Pooja9783/shop-bazar"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#2C3333",
                            "&:hover": {
                              backgroundColor: "#E7F6F2",
                              color: "#2C3333",
                            },
                            color: "#E7F6F2",
                          }}
                        >
                          GIT Link
                        </Button>
                      </a>
                      <a
                        href="https://shop-bazar-app.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#2C3333",
                            "&:hover": {
                              backgroundColor: "#E7F6F2",
                              color: "#2C3333",
                            },
                            color: "#E7F6F2",
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

            <Grid item md={6} mx={2} my={5}>
              <div>
                <Paper>
                  <Card
                    sx={{
                      maxWidth: 345,
                      height: "460px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 190, border:'6px solid #E7F6F2' }}
                      image={projectTwoImg}
                      title="Share Me"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Share Me
                      </Typography>
                      <Typography variant="body2">
                        A platform for uploading, viewing, and downloading
                        images with Google login authentication.
                      </Typography>
                      <Typography mt={1} variant="body2">
                        Used tech-stack : HTML | CSS | Javascript | Sanity |
                        ReactJs |
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a
                        href="https://github.com/Pooja9783/share-me-app"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#2C3333",
                            "&:hover": {
                              backgroundColor: "#E7F6F2",
                              color: "#2C3333",
                            },
                            color: "#E7F6F2",
                          }}
                        >
                          GIT Link
                        </Button>
                      </a>
                      <a
                        href="https://share-me-app-one.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#2C3333",
                            "&:hover": {
                              backgroundColor: "#E7F6F2",
                              color: "#2C3333",
                            },
                            color: "#E7F6F2",
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
                  <Card
                    sx={{
                      maxWidth: 345,
                      height: "460px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 190, border:'6px solid #E7F6F2' }}
                      image={projectThirdImg}
                      title="Clone of HealthKart"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Chat App
                      </Typography>
                      <Typography variant="body2">
                        A real-time chat app using WebSocket, MongoDB, Node.js,
                        and Express for instant messaging.
                      </Typography>
                      <Typography mt={1} variant="body2">
                        Used tech-stack :| Nodejs | ReactJs | ExpressJs |
                        MongoDB | Web Socket
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a
                        href="https://github.com/Pooja9783/message-app"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#2C3333",
                            "&:hover": {
                              backgroundColor: "#E7F6F2",
                              color: "#2C3333",
                            },
                            color: "#E7F6F2",
                          }}
                        >
                          GIT Link
                        </Button>
                      </a>
                      <a
                        href="https://message-app-prod.onrender.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#2C3333",
                            "&:hover": {
                              backgroundColor: "#E7F6F2",
                              color: "#2C3333",
                            },
                            color: "#E7F6F2",
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
