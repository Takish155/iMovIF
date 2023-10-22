import {
  AppBar,
  Button,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchNav from "../components/SearchNav";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#121212", color: "rgba(255, 255, 255, 0.7)" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: matches ? "flex-start" : "center",
          }}
        >
          <MenuIcon
            onClick={setOpen}
            sx={{
              display: matches ? "" : "none",
              marginRight: matches ? "1rem" : "",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            fontSize="large"
          />
          <Typography
            variant="h6"
            onClick={() => navigate("/")}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            iMovIF
          </Typography>
          <nav style={{ display: matches ? "none" : "" }}>
            <Button
              type="text"
              sx={{ color: "#fff", marginLeft: "2rem" }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              type="text"
              sx={{ color: "#fff" }}
              component={Link}
              to="/movies"
            >
              Movies
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/people">
              People
            </Button>
            <SearchNav />
          </nav>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="top"
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: "#121212",
            color: "#fff",
            width: "100%",
          },
        }}
      >
        <Button
          type="text"
          onClick={toggleDrawer}
          sx={{ color: "#fff", fontSize: "1.3rem" }}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          type="text"
          onClick={toggleDrawer}
          sx={{ color: "#fff", fontSize: "1.3rem" }}
          component={Link}
          to="/movies"
        >
          Movies
        </Button>
        <Button
          onClick={toggleDrawer}
          sx={{ color: "#fff", fontSize: "1.3rem" }}
          component={Link}
          to="/people"
        >
          People
        </Button>
      </Drawer>
    </>
  );
}
