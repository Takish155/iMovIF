import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const API_KEYS = process.env.REACT_APP_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEYS}`,
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
