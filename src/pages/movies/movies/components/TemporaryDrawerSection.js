import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SortMenu from "./SortMenu";
import { useMovieContext } from "../MovieContext";

export default function TemporaryDrawerSection() {
  const { movieState, movieGenreListState } = useMovieContext();
  const { movieGenre } = movieGenreListState;
  const {
    matches600px,
    openDrawer,
    setOpenDrawer,
    setGenreChanged,
    setCurrentGenre,
    currentGenre,
    currentScroll,
    setTriggerScroll,
  } = movieState;

  const navigate = useNavigate();

  return (
    <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: "#121212",
          color: "#fff",
          width: matches600px ? "100%" : "35%",
        },
      }}
    >
      {matches600px ? <SortMenu /> : ""}
      <List>
        {movieGenre.map((element) => {
          return (
            <React.Fragment key={element.id}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    setOpenDrawer(false);
                    setTriggerScroll(true);
                    setGenreChanged(true);
                    setCurrentGenre(element.name);
                    currentScroll.current = 0;
                    navigate(
                      `/movies/${element.name
                        .replaceAll(" ", "-")
                        .toLowerCase()}`
                    );
                  }}
                  sx={{
                    fontSize: currentGenre === element.name ? "1.5rem" : "1rem",
                    fontWeight: currentGenre === element.name ? "800" : "450",
                    padding: "1rem",
                    transition:
                      "font-weight 0.1s ease-in-out, font-size 0.2s ease-in-out",
                    "&:hover": {
                      fontWeight: "800",
                    },
                  }}
                >
                  {element.name}
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
    </Drawer>
  );
}
