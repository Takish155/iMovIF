import { createContext, useContext } from "react";
import useSearchQuery from "../../hooks/search/useSearchQuery";
import useLoadMoreQuery from "../../hooks/search/useLoadMoreQuery";

const MovieSearhQueryStateContext = createContext();
const LoadMoreStateContext = createContext();

export function SearchProvider({ children }) {
  const movieSearchQueryContext = useSearchQuery();
  const loadMoreContext = useLoadMoreQuery(
    movieSearchQueryContext.searchQueryResultFetchNextPage
  );

  return (
    <MovieSearhQueryStateContext.Provider value={movieSearchQueryContext}>
      <LoadMoreStateContext.Provider value={loadMoreContext}>
        {children}
      </LoadMoreStateContext.Provider>
    </MovieSearhQueryStateContext.Provider>
  );
}

export function useSearchQueryContext() {
  return useContext(MovieSearhQueryStateContext);
}

export function useLoadMoreQueryContext() {
  return useContext(LoadMoreStateContext);
}
