import { useContext, createContext } from "react";
import useGetGenres from "../../../hooks/movies/useGetGenres";
import useGetMovieByGenres from "../../../hooks/movies/useGetMovieByGenres";
import useMovies from "../../../hooks/movies/useMovies";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const movieState = useMovies();
  const movieGenreListState = useGetGenres();
  const movieGenreDataState = useGetMovieByGenres();

  return (
    <MovieContext.Provider
      value={{
        movieGenreListState,
        movieState,
        movieGenreDataState,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
