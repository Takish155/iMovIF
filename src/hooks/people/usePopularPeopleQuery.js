import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

const API_KEYS = process.env.REACT_APP_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEYS}`,
  },
};

export default function usePopularPeopleQuery() {
  const [sort, setSort] = useState("popular");

  async function fetchPopularPeople({ pageParam = 1 }) {
    const url = {
      popular: `https://api.themoviedb.org/3/person/popular?language=en-US&page=${pageParam}`,
      dayTrending: `https://api.themoviedb.org/3/trending/person/day?language=en-US&page=${pageParam}`,
      weekTrending: `https://api.themoviedb.org/3/trending/person/week?language=en-US&page=${pageParam}`,
    };

    try {
      const response = await fetch(url[sort], options);
      if (!response.ok) {
        throw new Error(`Error! ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  const {
    data: popularPeopleData,
    isLoading: popularPeopleDataLoading,
    isFetching: popularPeopleDataisFetching,
    fetchNextPage: popularPeopleDataFetchNextPage,
    hasNextPage: popularPeopleDataHasNextPage,
    isFetchingNextPage: popularPeopleDataIsFetchingNextPage,
  } = useInfiniteQuery(["popularPeople", sort], fetchPopularPeople, {
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return {
    popularPeopleData,
    popularPeopleDataLoading,
    popularPeopleDataisFetching,
    popularPeopleDataFetchNextPage,
    popularPeopleDataHasNextPage,
    popularPeopleDataIsFetchingNextPage,
    sort,
    setSort,
  };
}
