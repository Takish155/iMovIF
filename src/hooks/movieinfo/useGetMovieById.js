import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const API_KEYS = process.env.REACT_APP_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEYS}`,
  },
};

export default function useGetMovieById() {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  async function fetchMovieById() {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  return useQuery(["movieData", id], fetchMovieById, {
    staleTime: Infinity,
    refetchOnWindowFocus: true,
    onError: (error) => {
      navigate("/error");
      console.log(error.message);
    },
  });
}
