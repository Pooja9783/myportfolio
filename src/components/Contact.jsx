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
    <div style={{ background: "#000000" }} id="contact">
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
          <Box sx={{ display: "flex" }} py={1}>
            <SmartphoneIcon
              sx={{ fontSize: "40px", margin: "0px 5px", color: "#FFFFFF" }}
            />
            <a tel="+91 9783224446" target="_blank" rel="noreferrer">
              <Typography
                sx={{ fontSize: "20px", margin: "0px 5px", color: "#FFFFFF" }}
              >
                +91 9783224446
              </Typography>
            </a>
          </Box>
          <Box sx={{ display: "flex" }} py={1}>
            <MailOutlineIcon
              sx={{ fontSize: "40px", margin: "0px 5px", color: "#FFFFFF" }}
            />
            <a
              href="mailto: poojasankhala97@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{ fontSize: "20px", margin: "0px 5px", color: "#FFFFFF" }}
              >
                {" "}
                poojasankhala97@gmail.com
              </Typography>
            </a>
          </Box>
          <Box sx={{ display: "flex" }} py={1}>
            <Box>
              <a
                href="https://github.com/Pooja9783"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  sx={{ fontSize: "40px", margin: "2px 5px", color: "#FFFFFF" }}
                />
              </a>
            </Box>
            <a
              href="https://www.linkedin.com/in/pooja-sankhala"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon
                sx={{ fontSize: "40px", margin: "2px 5px", color: "#FFFFFF" }}
              />
            </a>
            <a
              href="https://twitter.com/poojasankhala9"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon
                sx={{ fontSize: "40px", margin: "2px 5px", color: "#FFFFFF" }}
              />
            </a>
            <a
              href="https://www.instagram.com/poojasankhala_97/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon
                sx={{ fontSize: "40px", margin: "2px 5px", color: "#FFFFFF" }}
              />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
