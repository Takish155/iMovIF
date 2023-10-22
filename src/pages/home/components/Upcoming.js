import { useHomeContext } from "../HomeContext";
import Section from "../../../components/Section";
import SkeletonComponent from "../../../skeletons/Skeleton";

export default function Upcoming() {
  const { upcomingQuery } = useHomeContext();
  const { data: upcoming, isLoading } = upcomingQuery;
  const emptyArray = [1, 2, 3, 4, 5, 6, 7];

  if (isLoading) {
    return emptyArray.map(() => {
      return <SkeletonComponent />;
    });
  }

  return <Section dataName={upcoming} />;
}
