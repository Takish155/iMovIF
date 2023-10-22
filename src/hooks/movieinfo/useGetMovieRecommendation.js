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

export default function useGetMovieRecommendation() {
  const { id } = useParams();
  const link = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;

  async function fetchRecommendtaion() {
    const response = await fetch(link, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  }

  return useQuery(["movieRecommendation", id], fetchRecommendtaion, {
    staleTime: Infinity,
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
