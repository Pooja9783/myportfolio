import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
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
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const projects = [
  {
    title: "Shop Bazar",
    description:
      "An easy-to-use e-commerce app with login/signup, product filtering, shopping cart, and secure payment.",
    techStack: "ReactJS | JavaScript | HTML | CSS",
    image: projectOneImg,
    gitLink: "https://github.com/Pooja9783/shop-bazar",
    demoLink: "https://shop-bazar-app.netlify.app",
  },
  {
    title: "Share Me",
    description:
      "A platform for uploading, viewing, and downloading images with Google login authentication.",
    techStack: "HTML | CSS | JavaScript | Sanity | ReactJS",
    image: projectTwoImg,
    gitLink: "https://github.com/Pooja9783/share-me-app",
    demoLink: "https://share-me-app-one.vercel.app/",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat app using WebSocket, MongoDB, Node.js, and Express for instant messaging.",
    techStack: "NodeJS | ReactJS | ExpressJS | MongoDB | WebSocket",
    image: projectThirdImg,
    gitLink: "https://github.com/Pooja9783/message-app",
    demoLink: "https://message-app-prod.onrender.com/",
  },
];

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
          Projects
        </Typography>

        <Box p={2}>
          <Carousel
            responsive={responsive}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {projects.map((project, index) => (
              <Grid
                item
                key={index}
                sx={{
                  mx: 1,
                  my: 5,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "460px",
                    borderRadius: "16px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 190,
                      borderRadius: "16px 16px 0 0",
                      border: "6px solid #E7F6F2",
                    }}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold", color: "#2C3333" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                        textAlign: "justify",
                        lineHeight: "1.5",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Typography
                      mt={1}
                      variant="body2"
                      sx={{ color: "#9318EE", fontWeight: "medium" }}
                    >
                      Tech Stack: {project.techStack}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href={project.gitLink}
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
                        GitHub
                      </Button>
                    </a>
                    <a
                      href={project.demoLink}
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
              </Grid>
            ))}
          </Carousel>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
