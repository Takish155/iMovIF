import { useHomeContext } from "../HomeContext";
import SkeletonComponent from "../../../skeletons/Skeleton";
import Section from "../../../components/Section";

export default function Trending() {
  const { trendQuery } = useHomeContext();
  const { data: trends, isLoading, refetching } = trendQuery;
  const emptyArray = [1, 2, 3, 4, 5];

  if (isLoading || refetching) {
    return emptyArray.map(() => {
      return <SkeletonComponent />;
    });
  }

  return <Section dataName={trends} />;
}
