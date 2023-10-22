import { useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function useMovies() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [genreChanged, setGenreChanged] = useState(true);
  const [currentGenre, setCurrentGenre] = useState("Action");
  const [triggerScroll, setTriggerScroll] = useState(true);
  const { ref: intersecting, inView } = useInView();
  const matches900px = useMediaQuery("(max-width:900px)");
  const matches600px = useMediaQuery("(max-width:600px)");

  const currentScroll = useRef(0);
  // Gets the current coords of a element that has movieSectionRef as their value for ref
  const movieSectionRef = useRef(0);

  useEffect(() => {
    // Checks if movieSectionRef is not null and if triggerScroll is true
    if (movieSectionRef.current && triggerScroll) {
      // Scroll to the top of the page
      movieSectionRef.current.scrollTo(0, 0);
      // Reset triggerScroll
      setTriggerScroll(false);
    }
  }, [triggerScroll]);

  return {
    openDrawer,
    setOpenDrawer,
    genreChanged,
    setGenreChanged,
    currentGenre,
    setCurrentGenre,
    triggerScroll,
    setTriggerScroll,
    intersecting,
    matches900px,
    matches600px,
    currentScroll,
    movieSectionRef,
    inView,
  };
}
