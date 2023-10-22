import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useLoadMorePeople(popularPeopleDataFetchNextPage) {
  const { ref: intersecting, inView: viewingLastElement } = useInView();

  useEffect(() => {
    if (viewingLastElement) {
      popularPeopleDataFetchNextPage();
      console.log("INTERSECTED");
    }
  }, [viewingLastElement, popularPeopleDataFetchNextPage]);

  return { intersecting };
}
