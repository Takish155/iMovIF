import { Skeleton } from "@mui/material";
import { useHomeContext } from "../HomeContext";
import Section from "../../../components/Section";

export default function Upcoming() {
  const { upcomingQuery } = useHomeContext();
  const { data: upcoming, isLoading } = upcomingQuery;
  const emptyArray = [1, 2, 3, 4, 5];

  if (isLoading) {
    return emptyArray.map(() => {
      return <Skeleton />;
    });
  }

  return <Section dataName={upcoming} />;
}
