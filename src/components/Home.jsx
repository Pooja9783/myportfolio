import React from "react";
import { Box, Typography, Toolbar, Grid, Button } from "@mui/material";
const Home = () => {
  return (
    <div>
      <Box component="main" id="home">
        <Toolbar />
        <Box mt={0.8}>
          <Box>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              style={{
                textAlign: "center",
                paddingTop: "40px",
              }}
            >
              <Box
                style={{
                  paddingTop: "40px",
                }}
              >
                <Typography variant="h4" id="heading" p={1}>
                  Hi there, I'm
                  <Typography variant="span" id="headingName">
                    {" "}
                    Pooja Sankhala
                  </Typography>
                </Typography>
                <Typography variant="h5" id="heading" p={1}>
                  Full-Stack Web Developer.
                </Typography>
                <Typography variant="h6" p={1} id="heading">
                  Keen to learn new things || Enthusiatic to solve problems.
                </Typography>
              </Box>
              <Box p={2}>
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
                  Get Resume
                </Button>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
