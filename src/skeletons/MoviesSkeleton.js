import { Grid, List, Skeleton } from "@mui/material";
import { useMovieContext } from "../pages/movies/movies/MovieContext";
import MovieDataSkeleton from "./MovieDataSkeleton";

const arrayWithNumber = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
export default function MoviesSkeleton() {
  const { movieState } = useMovieContext();
  const { matches900px } = movieState;

  return (
    <Grid container>
      <Grid
        item
        lg={2}
        md={2.5}
        sm={3}
        xs={12}
        sx={{
          display: matches900px ? "none" : "",
          height: "92vh",
          overflow: "hidden",
        }}
      >
        <List>
          {arrayWithNumber.map(() => {
            return (
              <>
                <Skeleton
                  disablePadding
                  width={200}
                  height={70}
                  sx={{
                    bgcolor: "grey.900",
                    fontSize: "1rem",
                    fontWeight: "450",
                    padding: "1rem",
                    margin: "0 auto",
                  }}
                >
                  <Skeleton
                    variant="text"
                    width={50}
                    height={500}
                    sx={{ bgcolor: "grey.900" }}
                  />
                </Skeleton>
              </>
            );
          })}
        </List>
      </Grid>
      <MovieDataSkeleton />
    </Grid>
  );
}
