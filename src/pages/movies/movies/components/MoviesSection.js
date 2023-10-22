import { Container, Grid } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import UnlimitedSection from "../../../../components/UnlimitedSection";
import { useMovieContext } from "../MovieContext";
import SortMenu from "./SortMenu";
import { useParams } from "react-router-dom";
import MovieDataSkeleton from "../../../../skeletons/MovieDataSkeleton";
import { verticalStyling } from "../../../../styles/styles";

export default function MoviesSection() {
  const { id } = useParams();
  const { movieState, movieGenreDataState } = useMovieContext();
  const { movieGenreData, movieGenreHasNextPage, movieGenreDataLoading } =
    movieGenreDataState;

  const {
    matches900px,
    setOpenDrawer,
    matches600px,
    movieSectionRef,
    intersecting,
  } = movieState;

  if (movieGenreDataLoading) {
    return <MovieDataSkeleton />;
  }

  return (
    <Grid item lg={10} md={9.5} sm={12} xs={12} sx={{ height: "92vh" }}>
      <div className="flex items-center">
        <FilterAltIcon
          className=" ml-5"
          onClick={() => setOpenDrawer(true)}
          sx={{ cursor: "pointer", display: matches900px ? "" : "none" }}
        />
        <h2 className="text-2xl font-bold m-5 uppercase">
          {!id
            ? "Action Movies"
            : id === "tv-movies"
            ? `${id.replaceAll("-", " ")}`
            : id.replaceAll("-", " ") + " Movies"}
        </h2>
        {matches600px ? "" : <SortMenu />}
      </div>
      <Container ref={movieSectionRef} sx={verticalStyling}>
        <UnlimitedSection dataName={movieGenreData.pages} />
        <p ref={intersecting}>
          {!movieGenreHasNextPage ? "No more to load" : "Loading more pages..."}
        </p>
      </Container>
    </Grid>
  );
}
