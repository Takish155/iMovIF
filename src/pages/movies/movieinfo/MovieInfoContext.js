import { useContext, createContext } from "react";
import useGetMovieTrailer from "../../../hooks/movieinfo/useGetMovieTrailer";
import useGetMovieById from "../../../hooks/movieinfo/useGetMovieById";
import useGetMovieRecommendation from "../../../hooks/movieinfo/useGetMovieRecommendation";
import useGetMovieCredits from "../../../hooks/movieinfo/useGetMovieCredits";

const MovieInfoContext = createContext();

export function MovieInfoProvider({ children }) {
  const movieTrailerQuery = useGetMovieTrailer();
  const getMovieDataQuery = useGetMovieById();
  const getMovieRecommendationQuery = useGetMovieRecommendation();
  const getMovieCredits = useGetMovieCredits();

  return (
    <MovieInfoContext.Provider
      value={{
        movieTrailerQuery,
        getMovieDataQuery,
        getMovieRecommendationQuery,
        getMovieCredits,
      }}
    >
      {children}
    </MovieInfoContext.Provider>
  );
}

export function useMovieInfoContext() {
  return useContext(MovieInfoContext);
}
