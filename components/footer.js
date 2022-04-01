import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import MoreIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "next/link";
import Axios from "axios";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import absoluteUrl from "next-absolute-url";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { origin } = absoluteUrl(req);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl2, setMobileMoreAnchorEl2] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMobileMenuOpen2 = Boolean(mobileMoreAnchorEl2);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuClose2 = () => {
    setMobileMoreAnchorEl2(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen2 = (event) => {
    setMobileMoreAnchorEl2(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            DFEGS WYC YSECYET
          </Typography>
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            LIBRARY
          </Typography>
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            SCOREBOARD
          </Typography>
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            MEMBERSHIP
          </Typography>
        </MenuItem>
      </Link>
    </Menu>
  );

  const renderMobileMenu2 = (
    <Menu
      anchorEl={mobileMoreAnchorEl2}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen2}
      onClose={handleMobileMenuClose2}
    >
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              style={{ margin: "auto" }}
            >
              <CircleIcon />
            </IconButton>
          </Typography>
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              style={{ margin: "auto" }}
            >
              <CircleIcon />
            </IconButton>
          </Typography>
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              style={{ margin: "auto" }}
            >
              <CircleIcon />
            </IconButton>
          </Typography>
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            Link 1
          </Typography>
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            Link 2
          </Typography>
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            Link 3
          </Typography>
        </MenuItem>
      </Link>
      <Link href="/" passHref>
        <MenuItem>
          <Typography
            variant="h8"
            noWrap
            component="div"
            style={{ margin: "0.2rem", cursor: "pointer" }}
          >
            Link 4
          </Typography>
        </MenuItem>
      </Link>
    </Menu>
  );

  const [email, setEmail] = React.useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const [error, setError] = React.useState({
    severity: "",
    message: "",
    open2: false,
  });

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError({ severity: "", message: "", open2: false });
  };

  const onSubmit = () => {
    if (email.includes("@") && email.includes(".")) {
      Axios.post(`${origin}/api/newsletterSubs`, {
        email,
        auth: 'apif3e42fea-7b35-47ad-bad4-114a14323176api'
      })
        .then((resp) => {
          setError({
            severity: "success",
            message: resp.data.message,
            open2: true,
          });
        })
        .catch(({ response }) => {
          setError({
            severity: "error",
            message: response.data.error,
            open2: true,
          });
        });
    } else {
      setError({
        severity: "error",
        message: "Please enter a valid email.",
        open2: true,
      });
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ backgroundColor: "#B22048", padding: "1rem" }}
          position="static"
        >
          <Toolbar>
            <Typography align="left">
              <TextField
                required
                id="outlined-required"
                label="Email"
                type="email"
                onChange={(e) => handleChange(e)}
                value={email}
              />
              <br />
              <br />
              <Button
                variant="contained"
                style={{ backgroundColor: "black" }}
                onClick={onSubmit}
              >
                Keep Updated!
              </Button>
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              style={{ margin: "auto" }}
            >
              <Image src="/hat.png" height={50} width={50} />
            </IconButton>

            <Box sx={{ flexGrow: 1 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link href="/" passHref>
                  <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    style={{ margin: "0.2rem", cursor: "pointer" }}
                  >
                    {" "}
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 2 }}
                      style={{ margin: "auto" }}
                    >
                      <CircleIcon />
                    </IconButton>
                  </Typography>
                </Link>
                <Link href="/" passHref>
                  <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    style={{ margin: "0.2rem", cursor: "pointer" }}
                  >
                    {" "}
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 2 }}
                      style={{ margin: "auto" }}
                    >
                      <CircleIcon />
                    </IconButton>
                  </Typography>
                </Link>
                <Link href="/" passHref>
                  <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    style={{ margin: "0.2rem", cursor: "pointer" }}
                  >
                    {" "}
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 2 }}
                      style={{ margin: "auto" }}
                    >
                      <CircleIcon />
                    </IconButton>
                  </Typography>
                </Link>
              </Box>
              <Box
                style={{ flexDirection: "column", marginRight: "1rem" }}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Link href="/" passHref>
                  <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    style={{ margin: "0.2rem", cursor: "pointer" }}
                    align="right"
                  >
                    Link 1
                  </Typography>
                </Link>
                <Link href="/" passHref>
                  <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    style={{ margin: "0.2rem", cursor: "pointer" }}
                    align="right"
                  >
                    Link 2
                  </Typography>
                </Link>
                <Link href="/" passHref>
                  <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    style={{ margin: "0.2rem", cursor: "pointer" }}
                    align="right"
                  >
                    Link 3
                  </Typography>
                </Link>
                <Link href="/" passHref>
                  <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    style={{ margin: "0.2rem", cursor: "pointer" }}
                    align="right"
                  >
                    Link 4
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen2}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu2}
      </Box>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={error.open2}
          autoHideDuration={6000}
          onClose={handleClose2}
        >
          <Alert
            onClose={handleClose2}
            severity={error.severity}
            sx={{ width: "100%"}}
          >
            {error.message}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}
