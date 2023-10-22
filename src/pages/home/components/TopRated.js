import { useHomeContext } from "../HomeContext";
import SkeletonComponent from "../../../skeletons/Skeleton";
import Section from "../../../components/Section";

const emptyArray = [1, 2, 3, 4, 5];

export default function TopRated() {
  const { topRatedQuery } = useHomeContext();
  const { data: topRated, isLoading } = topRatedQuery;

  if (isLoading) {
    return emptyArray.map(() => {
      return <SkeletonComponent />;
    });
  }

  return <Section dataName={topRated} />;
}
