import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useMovieContext } from "./MovieContext";
import PermanentDrawerSection from "./components/PermanentDrawerSection";
import TemporaryDrawerSection from "./components/TemporaryDrawerSection";
import MoviesSection from "./components/MoviesSection";
import MoviesSkeleton from "../../../skeletons/MoviesSkeleton";

export default function Movies() {
  const { movieGenreListState, movieGenreDataState, movieState } =
    useMovieContext();
  const {
    genreChanged,
    setGenreChanged,
    inView,
    currentScroll,
    movieSectionRef,
  } = movieState;
  const { movieGenreLoading } = movieGenreListState;
  const { fetchNextMovieGenrePage, movieGenreData } = movieGenreDataState;

  useEffect(() => {
    // Checks if the user is intersecting(or seeing)
    if (inView === true) {
      console.log("INTERESECTED");
      // Saves the scroll coords
      currentScroll.current = movieSectionRef.current.scrollTop;
      fetchNextMovieGenrePage();
    }
  }, [inView, currentScroll, movieSectionRef, fetchNextMovieGenrePage]);

  useEffect(() => {
    // Checks if movieSectionRef is not null without this, it will throw a Runtime Error!
    if (movieSectionRef.current && !movieGenreLoading) {
      // Sets the scroll coords to the top of the new data
      if (!genreChanged) {
        movieSectionRef.current.scrollTo(0, currentScroll.current);
      } else {
        // If genre changes, it will scroll to the top of the page
        movieSectionRef.current.scrollTo(0, 0);
      }
    }

    setGenreChanged(false);
  }, [
    movieGenreData,
    movieGenreLoading,
    currentScroll,
    genreChanged,
    movieSectionRef,
    setGenreChanged,
  ]);

  if (movieGenreLoading) {
    return <MoviesSkeleton />;
  }
  return (
    <main>
      <Grid container>
        <PermanentDrawerSection />
        <MoviesSection />
      </Grid>
      <TemporaryDrawerSection />
    </main>
  );
}
