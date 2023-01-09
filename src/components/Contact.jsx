import React from "react";
import { Box, Typography } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Contact = () => {
  return (
    <div id="contact">
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
            width: "190px",
            margin: "auto",
          }}
        >
          {" "}
          Contact Me
        </Typography>
        <Box
          sx={{
            width: "300px",
            margin: "20px auto 0px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "300px",
              textAlign: "center",
              justifyContent: "center",
            }}
            py={1}
          >
            <SmartphoneIcon
              id="heading"
              sx={{ fontSize: "30px", margin: "0px 5px" }}
            />
            <a tel="+91 9783224446" target="_blank" rel="noreferrer">
              <Typography
                id="heading"
                sx={{ fontSize: "20px", margin: "0px 5px" }}
              >
                +91 9783224446
              </Typography>
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "300px",
              textAlign: "center",
              justifyContent: "center",
            }}
            py={1}
          >
            <MailOutlineIcon
              id="heading"
              sx={{ fontSize: "30px", margin: "2px 5px" }}
            />
            <a
              href="mailto: poojasankhala97@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Typography
                id="heading"
                sx={{
                  fontSize: "20px",
                  margin: "0px 5px",
                  borderBottom: "1px solid #A5C9CA",
                }}
              >
                {" "}
                poojasankhala97@gmail.com
              </Typography>
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "300px",
              textAlign: "center",
              justifyContent: "center",
            }}
            py={1}
          >
            <Box>
              <a
                href="https://github.com/Pooja9783"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  id="heading"
                  sx={{ fontSize: "30px", margin: "2px 5px" }}
                />
              </a>
            </Box>
            <a
              href="https://www.linkedin.com/in/pooja-sankhala"
              target="_blank"
              rel="noreferrer"
              id="heading"
            >
              <LinkedInIcon
                id="heading"
                sx={{ fontSize: "30px", margin: "2px 5px" }}
              />
            </a>
            <a
              href="https://twitter.com/poojasankhala9"
              target="_blank"
              rel="noreferrer"
              id="heading"
            >
              <TwitterIcon
                id="heading"
                sx={{ fontSize: "30px", margin: "2px 5px", color: "#FFFFFF" }}
              />
            </a>
            <a
              href="https://www.instagram.com/poojasankhala_97/"
              target="_blank"
              rel="noreferrer"
              id="heading"
            >
              <InstagramIcon
                id="heading"
                sx={{ fontSize: "30px", margin: "2px 5px", color: "#FFFFFF" }}
              />
            </a>
          </Box>
        </Box>
      </Box>
      <hr />
    </div>
  );
};

export default Contact;
