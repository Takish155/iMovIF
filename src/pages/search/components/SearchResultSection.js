import { Container, Grid } from "@mui/material";
import {
  useLoadMoreQueryContext,
  useSearchQueryContext,
} from "../SearchContext";
import { verticalStyling } from "../../../styles/styles";
import UnlimitedSection from "../../../components/UnlimitedSection";
import SearchResultSectionSkeleton from "./SearchResultSectionSkeleton";

export default function SearchResultSection() {
  const {
    searchQuery,
    searchQueryResultData,
    searchQueryResultHasNextPage,
    searchQueryResultLoading,
  } = useSearchQueryContext();
  const { intersecting } = useLoadMoreQueryContext();

  if (searchQueryResultLoading) {
    return <SearchResultSectionSkeleton />;
  }

  return (
    <Grid
      item
      lg={10}
      md={9.5}
      sm={12}
      xs={12}
      sx={{ height: "92vh", margin: "0 auto" }}
    >
      <h2 className="text-2xl font-bold uppercase p-5">
        Search for: {searchQuery}
      </h2>
      <Container sx={verticalStyling}>
        <UnlimitedSection dataName={searchQueryResultData.pages} />
        <p className="mt-10" ref={intersecting}>
          {searchQueryResultHasNextPage ? "Loading more..." : ""}
        </p>
      </Container>
    </Grid>
  );
}
