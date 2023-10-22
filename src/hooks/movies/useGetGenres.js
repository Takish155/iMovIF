import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const API_KEYS = process.env.REACT_APP_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEYS}`,
  },
};

const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US";

export default function useGetGenres() {
  const navigate = useNavigate();

  async function fetchGenres() {
    const response = await fetch(url, options);

    if (!response.ok) {
      navigate("/error");
      throw new Error(`Error! ${response.status}`);
    }

    const data = await response.json();
    return data.genres;
  }

  const { data: movieGenre, isLoading: movieGenreLoading } = useQuery(
    ["movieGenres"],
    fetchGenres,
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  return { movieGenre, movieGenreLoading };
}
