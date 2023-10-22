import { useQuery } from "@tanstack/react-query";

const API_KEYS = process.env.REACT_APP_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEYS}`,
  },
};

const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=10`;

export default function useGetUpcoming() {
  const fetchUpcoming = async () => {
    const today = new Date();
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results.filter((movie) => new Date(movie.release_date) > today);
  };

  return useQuery(["upcoming"], fetchUpcoming, {
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
