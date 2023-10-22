import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_KEYS = process.env.REACT_APP_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEYS}`,
  },
};

const genreList = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  scienceFiction: 878,
  tvMovie: 10770,
  thriller: 53,
  war: 10752,
  western: 37,
};

export default function useGetMovieByGenres() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [genre, setGenre] = useState(28);
  const [sort, setSort] = useState("popularity.desc");

  function getGenreId(paramId) {
    if (paramId === "" || paramId === undefined) {
      return "28";
    }

    if (paramId === "science-fiction") {
      return "878";
    }

    if (paramId === "tv-movie") {
      return "10770";
    }

    if (!Object.keys(genreList).includes(paramId)) {
      throw new Error(`Invalid genre! ${paramId}`);
    }

    return genreList[id];
  }

  async function fetchGenreData({ pageParam = 1 }) {
    let genreId;
    try {
      genreId = getGenreId(id);
    } catch (err) {
      console.error(err);
      navigate("/error");
    }

    const link = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${pageParam}&sort_by=${sort}&with_genres=${getGenreId(
      id
    )}`;
    const response = await fetch(link, options);

    if (!response.ok) {
      throw new Error(`Error! ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  const {
    data: movieGenreData,
    isLoading: movieGenreDataLoading,
    fetchNextPage: fetchNextMovieGenrePage,
    hasNextPage: movieGenreHasNextPage,
    isFetchingNextPage: movieGenreIsFetchingNextPage,
  } = useInfiniteQuery(["genreData", genre, sort, id], fetchGenreData, {
    getNextPageParam: (lastPage) => lastPage.page + 1,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    onError: () => {
      navigate("/error");
    },
  });

  return {
    movieGenreData,
    movieGenreDataLoading,
    fetchNextMovieGenrePage,
    movieGenreHasNextPage,
    movieGenreIsFetchingNextPage,
    genre,
    setGenre,
    sort,
    setSort,
  };
}
