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

export default function useGetMovieCredits() {
  const { id } = useParams();
  const link = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

  async function fetchMovieCredits() {
    const response = await fetch(link, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.cast;
  }

  return useQuery(["movieCredits", id], fetchMovieCredits, {
    staleTime: Infinity,
    retry: true,
    retryDelay: (attempt) => Math.min(attempt * 10000, 30000),
    onError: (error) => {
      console.error(error);
    },
  });
}
