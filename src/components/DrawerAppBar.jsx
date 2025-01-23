import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import resume from "../img/Pooja_Sankhala.pdf";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { toggleTheme } = useContext(ThemeContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", justifyContent: "center" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Pooja Sankhala
      </Typography>
      <Divider />
      <List>
        <Link href="#home" underline="none" m={2}>
          <Typography id="heading">{"Home"}</Typography>
        </Link>
        <Link href="#about" underline="none" m={2}>
          <Typography id="heading">{"About"}</Typography>
        </Link>
        <Link href="#skills" underline="none" m={2}>
          <Typography id="heading">{"Skills"}</Typography>
        </Link>
        <Link href="#projects" underline="none" m={2}>
          <Typography id="heading">{"Projects"}</Typography>
        </Link>
        <Link href="#contact" underline="none" m={2}>
          <Typography id="heading">{"Contact"}</Typography>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ background: "#000000", height: "70px" }}
        id="appBar"
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>{" "}
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  style={{ float: "right" }}
                  mr={10}
                  mt={1}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <Switch onChange={toggleTheme} color="default" />
                </Box>{" "}
              </Grid>
            </Grid>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 4, display: { xs: "none", sm: "block" } }}
            id="logo"
          >
            Pooja Sankhala
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Link href="#home" underline="none" m={2}>
              <Typography id="heading">{"Home"}</Typography>
            </Link>
            <Link href="#about" underline="none" m={2}>
              <Typography id="heading">{"About"}</Typography>
            </Link>
            <Link href="#skills" underline="none" m={2}>
              <Typography id="heading">{"Skills"}</Typography>
            </Link>
            <Link href="#projects" underline="none" m={2}>
              <Typography id="heading">{"Projects"}</Typography>
            </Link>
            <Link href="#contact" underline="none" m={2}>
              <Typography id="heading">{"Contact"}</Typography>
            </Link>
            <Box m={2} display="flex" sx={{ cursor: "pointer" }}>
              <a
                href="https://drive.google.com/file/d/1gvjIYG5wjGJKyumKKjarcfT0g1aTsino/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                download="Pooja-Sankhala-Resume" 
                style={{
                  textDecoration: "none",
                  display: "flex",
                  color: "#395b64",
                }}
              >
                <Typography id="heading" mr={0.5}>
                  {"Resume"}
                </Typography>
                <a href={resume} download="Pooja-Sankhala-Resume" 
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  color: "#395b64",
                }}>
                  <CloudDownloadIcon />
                </a>
              </a>
            </Box>
            <Box mr={8} mt={1}>
              <Switch onChange={toggleTheme} color="default" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
