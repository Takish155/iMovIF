import { createContext, useContext } from "react";
import React from "react";
import usePopularPeopleQuery from "../../hooks/people/usePopularPeopleQuery";
import useLoadMorePeople from "../../hooks/people/useLoadMorePeople";

const PopularPeopleStateContext = createContext();
const LoadMoreQueryStateContext = createContext();

export function PeopleProvider({ children }) {
  const popularPeopleState = usePopularPeopleQuery();
  const loadMoreQueryState = useLoadMorePeople(
    popularPeopleState.popularPeopleDataFetchNextPage
  );

  return (
    <PopularPeopleStateContext.Provider value={popularPeopleState}>
      <LoadMoreQueryStateContext.Provider value={loadMoreQueryState}>
        {children}
      </LoadMoreQueryStateContext.Provider>
    </PopularPeopleStateContext.Provider>
  );
}

export function usePopularPeopleQueryContext() {
  return useContext(PopularPeopleStateContext);
}

export function useLoadMorePeopleContext() {
  return useContext(LoadMoreQueryStateContext);
}
