import React from "react";
import { Box, Typography, Toolbar, Grid, Button } from "@mui/material";
const Home = () => {
  return (
    <div>
      <Box component="main" id="home">
        <Toolbar />
        <Box sx={{ background: "#000000", color: "#9318EE" }} mt={0.8}>
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
                <Typography variant="h4" sx={{ color: "#FFFFFF" }} p={1}>
                  Hi there, I'm
                  <Typography variant="span" sx={{ color: "#9318EE" }}>
                    {" "}
                    Pooja Sankhala
                  </Typography>
                </Typography>
                <Typography variant="h5" sx={{ color: "#FFFFFF" }} p={1}>
                  Full-Stack Web Developer.
                </Typography>
                <Typography variant="h6" p={1}>
                  Keen to learn new things || Enthusiatic to solve problems.
                </Typography>
              </Box>
              <Box p={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#9318EE",
                    "&:hover": {
                      backgroundColor: "#9318EE",
                    },
                    color: "#FFFFFF",
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
