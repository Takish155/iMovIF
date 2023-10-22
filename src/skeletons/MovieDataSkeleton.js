import { Container, Grid, Skeleton } from "@mui/material";
import InfiniteQuerySkeleton from "./InfiniteQuerySkeleton";
import { useMovieContext } from "../pages/movies/movies/MovieContext";

export default function MovieDataSkeleton() {
  const { movieState } = useMovieContext();
  const { matches600px, matches900px } = movieState;

  return (
    <Grid item lg={10} md={9.5} sm={12} xs={12} sx={{ height: "92vh" }}>
      <div className="flex items-center gap-5">
        <Skeleton
          className="ml-5"
          width={50}
          height={80}
          variant="text"
          sx={{
            cursor: "pointer",
            display: matches900px ? "" : "none",
            bgcolor: "grey.900",
          }}
        />
        <Skeleton
          variant="text"
          width={300}
          height={80}
          className="ml-10"
          sx={{ bgcolor: "grey.900" }}
        />
        {matches600px ? (
          ""
        ) : (
          <Skeleton
            variant="text"
            width={250}
            height={80}
            sx={{ bgcolor: "grey.900" }}
          />
        )}
      </div>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          overflow: "scroll",
          height: "87%",
        }}
      >
        <InfiniteQuerySkeleton />
      </Container>
    </Grid>
  );
}
