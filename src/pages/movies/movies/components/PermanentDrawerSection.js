import { Grid, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../MovieContext";

export default function PermanentDrawerSection() {
  const navigate = useNavigate();
  const { movieState, movieGenreListState } = useMovieContext();
  const {
    matches900px,
    setGenreChanged,
    setCurrentGenre,
    currentGenre,
    setTriggerScroll,
    currentScroll,
  } = movieState;
  const { movieGenre } = movieGenreListState;

  return (
    <Grid
      item
      lg={2}
      md={2.5}
      sm={3}
      xs={12}
      sx={{
        display: matches900px ? "none" : "",
        height: "92vh",
        overflow: "scroll",
        borderRight: "0.001px solid #414141",
      }}
    >
      <List>
        {movieGenre.map((element) => {
          return (
            <React.Fragment key={element.id}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
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
    </Grid>
  );
}
