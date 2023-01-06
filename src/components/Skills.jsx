import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Skills = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div style={{ background: "#000000" }} id="skills">
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
            width: "100px",
            margin: "auto",
          }}
        >
          {" "}
          Skills
        </Typography>
        <Box mt={10} p={2}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/70/000000/html-5--v1.png"
                    alt="html"
                  />
                  <Typography>HTML</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/70/000000/css3.png"
                    alt="Css"
                  />
                  <Typography>CSS</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://img.icons8.com/ios-filled/70/000000/javascript-logo.png"
                    alt="js"
                  />
                  <Typography>Javascript</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://img.icons8.com/plasticine/70/000000/react.png"
                    alt="react"
                  />
                  <Typography>Reactjs</Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/70/000000/bootstrap.png"
                    alt="bootstrap"
                  />
                  <Typography>Bootstrap</Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/70/000000/nodejs.png"
                    alt="nodejs"
                  />
                  <Typography>Nodejs</Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://abhishek-mukade.vercel.app/images/icons/expressjs.svg"
                    alt="expressjs"
                  />
                  <Typography>Expressjs</Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/70/000000/mongodb.png"
                    alt="mongo"
                  />
                  <Typography>MongoDb</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://img.icons8.com/ios-glyphs/70/000000/github.png"
                    alt="github"
                  />
                  <Typography>Github</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/70/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
                    alt="postman"
                  />
                  <Typography>Postman</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item>
                <Box
                  sx={{
                    width: "100px",
                    bgcolor: "white",
                    margin: "auto",
                  }}
                >
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-tailwind-css-70.png"
                    alt="tailwind"
                  />
                  <Typography>Tailwind</Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Skills;
