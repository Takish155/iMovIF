import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI1MzFjZmI3ODBiNmQ3Mzc5ZmI3YzNiMDE3ZDZmMSIsInN1YiI6IjY0ZWFjMzE5YzVjMWVmMDBlNGFhNzMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6HG6BS5QMv84v7O9xEvP0F4oRHeqRIYqWRr-apPXRQo",
  },
};

export default function useSearchQuery() {
  const [searchQueryParams] = useSearchParams();
  const searchQuery = searchQueryParams.get("query");

  async function fetchSearchQuery({ pageParam = 1 }) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${pageParam}&region=us`;
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  }

  const {
    data: searchQueryResultData,
    isLoading: searchQueryResultLoading,
    isFetchingNextPage: searchQueryResultIsFetchingNextPage,
    fetchNextPage: searchQueryResultFetchNextPage,
    hasNextPage: searchQueryResultHasNextPage,
  } = useInfiniteQuery(["searchQueryResult", searchQuery], fetchSearchQuery, {
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return {
    searchQuery,
    searchQueryResultData,
    searchQueryResultLoading,
    searchQueryResultIsFetchingNextPage,
    searchQueryResultFetchNextPage,
    searchQueryResultHasNextPage,
  };
}
