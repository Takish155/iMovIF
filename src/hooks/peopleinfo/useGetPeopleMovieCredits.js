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

export default function useGetPeopleMovieCredits() {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`;

  async function fetchPeopleMovieCredits() {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error! ${response.status}`);
    }

    const data = await response.json();
    return data.cast;
  }

  const {
    data: getPeopleMovieCreditsData,
    isLoading: getPeopleMovieCreditsDataLoading,
    isFetching: getPeopleMovieCreditsDataIsFetching,
  } = useQuery(["peopleMovieCredits", id], fetchPeopleMovieCredits, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return {
    getPeopleMovieCreditsData,
    getPeopleMovieCreditsDataLoading,
    getPeopleMovieCreditsDataIsFetching,
  };
}
