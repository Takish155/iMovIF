import { Container } from "@mui/material";
import PeopleBox from "../../../components/PeopleBox";
import {
  useLoadMorePeopleContext,
  usePopularPeopleQueryContext,
} from "../PeopleContext";
import SortPeople from "./SortPeople";
import PeopleSkeleton from "../../../skeletons/PeopleSkeleton";

export default function PopularPeopleList() {
  const { popularPeopleData, popularPeopleDataLoading } =
    usePopularPeopleQueryContext();
  const { intersecting } = useLoadMorePeopleContext();

  return (
    <Container>
      <div className="flex items-center">
        <h2 className="text-3xl font-bold p-5">People</h2>
        <SortPeople />
      </div>

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "3rem",
          height: "82vh",
          overflow: popularPeopleDataLoading ? "hidden" : "scroll",
        }}
      >
        {!popularPeopleDataLoading ? (
          <PeopleBox dataName={popularPeopleData} />
        ) : (
          <PeopleSkeleton />
        )}
        <p ref={intersecting}>Loading more</p>
      </Container>
    </Container>
  );
}
