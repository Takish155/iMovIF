import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const API_KEYS = process.env.REACT_APP_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEYS}`,
  },
};

export default function useGetMovieTrailer() {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}/videos`;
  async function fetchMovieTrailer() {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  }

  return useQuery(["movieTrailer", id], fetchMovieTrailer, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      // Retry for all errors
      return true;
    },
    retryDelay: (attemptIndex) => Math.min(attemptIndex * 10000, 30000), // 10s, 20s, 30s
    onError: (error) => {
      // Handle the error
      console.log(error.message);
    },
  });
}
