import { Container, Grid } from "@mui/material";
import InfiniteQuerySkeleton from "../../../skeletons/InfiniteQuerySkeleton";
import { useSearchQueryContext } from "../SearchContext";
import { verticalStylingSkeleton } from "../../../styles/styles";

export default function SearchResultSectionSkeleton() {
  const { searchQuery } = useSearchQueryContext();
  return (
    <>
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
        <Container sx={verticalStylingSkeleton}>
          <InfiniteQuerySkeleton />
        </Container>
      </Grid>
    </>
  );
}
