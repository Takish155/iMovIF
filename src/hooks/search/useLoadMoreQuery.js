import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useLoadMoreQuery(searchQueryResultFetchNextPage) {
  const { ref: intersecting, inView: viewingLastElement } = useInView();

  useEffect(() => {
    if (viewingLastElement) {
      searchQueryResultFetchNextPage();
    }
  }, [viewingLastElement, searchQueryResultFetchNextPage]);

  return {
    intersecting,
    viewingLastElement,
  };
}
