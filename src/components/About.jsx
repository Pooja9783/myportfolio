import React from "react";
import myImage from "../img/my.png";

import {Box, Typography, Grid} from "@mui/material";
const About = () => {
    return (
        <div id="about">
            <Box
                sx={{
                    flexGrow: 1,

                    color: "#9318EE",
                    width: {md: "950px", sm: "auto"},
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

                <Grid
                    container
                    spacing={2}
                    mt={10}
                    textAlign={{xs: "center", md: "left"}} // Center text on smaller screens
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                        m={2}
                        mt={1}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={myImage}
                            style={{
                                width: "250px",
                                height: "250px",
                                objectFit: "cover",
                                border: "2px solid #2C3333",
                                borderRadius: "50%",
                                display: "block",
                            }}
                            alt={"Pooja"}
                        />{" "}
                    </Grid>
                    <Grid item xs={12} md={7} m={2}>
                        <Typography variant="h5" id="heading" mt={2}>
                            A passionate full-stack web developer, dedicated to develope robust web application. Having
                            interest to learn new technologies and build web apps. Problem-solving mindset with a goal
                            to optimize application for better stability and speed. Love to work in a team.
                            <br />
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box></Box>
        </div>
    );
};

export default About;
