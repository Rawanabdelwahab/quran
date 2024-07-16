/* eslint-disable no-unused-vars */
// Navbar.jsx
import React from "react";
import logo from "../assets/images/Logo wide wihte (1).png";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "./styles.css"; // Import your CSS file

const pages = ["الدورات والخطط", "المعلمين", "الاسئلة الشائعة", "تواصل معنا"];

// Create an RTL cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

// Create a theme with RTL and custom font
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: '"IBM Plex Sans Arabic", sans-serif',
  },
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={{ backgroundColor: "#3a3d3c" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Grid container alignItems="center">
                <Grid item xs={6} md={2}>
                  <a href="#">
                    <Box
                      component="img"
                      className="navbarLogo"
                      alt="Logo"
                      src={logo}
                      sx={{ width: { xs: 100, md: 150 } }}
                    />
                  </a>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={8}
                  display="flex"
                  justifyContent={{ xs: "flex-end", md: "center" }}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      justifyContent: "center",
                    }}
                  >
                    {pages.map((page) => (
                      <a
                        key={page}
                        href={`/${page.toLowerCase().replace(/\s/g, "-")}`} // Example route path
                        onClick={handleCloseNavMenu}
                        className="nav-link"
                      >
                        <Typography variant="h6">{page}</Typography>
                      </a>
                    ))}
                  </Box>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ display: { xs: "none", md: "flex" } }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#686e6b",
                        color: "white",
                        border: "2px solid white",
                        "&:hover": {
                          backgroundColor: "white",
                          border: "2px solid white",
                          color: "#686e6b",
                        },
                      }}
                      variant="text"
                    >
                      تسجيل دخول
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: "white",
                        color: "#686e6b",
                        border: "2px solid #686e6b",
                        "&:hover": {
                          backgroundColor: "#686e6b",
                          border: "2px solid white",
                          color: "white",
                        },
                      }}
                      variant="contained"
                    >
                      انضم الينا
                    </Button>
                  </Stack>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#686e6b",
                        color: "white",
                        border: "2px solid white",
                        "&:hover": {
                          backgroundColor: "white",
                          border: "2px solid white",
                          color: "#686e6b",
                        },
                        marginRight: 1,
                      }}
                      variant="text"
                    >
                      تسجيل دخول
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: "white",
                        color: "#686e6b",
                        border: "2px solid #686e6b",
                        "&:hover": {
                          backgroundColor: "#686e6b",
                          border: "2px solid white",
                          color: "white",
                        },
                      }}
                      variant="contained"
                    >
                      انضم الينا
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Navbar;
