import { Grid, useMediaQuery } from "@mui/material";
import { useMovieInfoContext } from "./MovieInfoContext";
import MovieInfoSkeleton from "../../../skeletons/MovieInfoSkeleton";
import { useEffect, useState } from "react";
import TrailerSection from "./components/TrailerSection";
import CastSection from "./components/CastSection";
import AsideSection from "./components/AsideSection";
import RecommendationSection from "./components/RecommendationSection";

export default function MovieInfo() {
  const [currentTrailer, setCurrentTrailer] = useState("");
  const {
    movieTrailerQuery,
    getMovieDataQuery,
    getMovieRecommendationQuery,
    getMovieCredits,
  } = useMovieInfoContext();

  const matches = useMediaQuery("(max-width:900px)");
  const { data: movieData, isLoading: movieDataLoading } = getMovieDataQuery;
  const { data: trailerData, isLoading: trailerDataLoading } =
    movieTrailerQuery;
  const { data: recommendationData, isLoading: recommendationDataLoading } =
    getMovieRecommendationQuery;
  const { data: creditData, isLoading: creditDataLoading } = getMovieCredits;

  useEffect(() => {
    setCurrentTrailer("");
  }, [movieDataLoading, trailerDataLoading, recommendationDataLoading]);

  useEffect(() => {
    if (trailerData && trailerData.length > 0) {
      setCurrentTrailer(trailerData[0].key);
    }
  }, [trailerData]);

  if (
    movieDataLoading ||
    trailerDataLoading ||
    recommendationDataLoading ||
    creditDataLoading ||
    movieTrailerQuery.isError ||
    getMovieDataQuery.isError ||
    recommendationData.isError
  ) {
    return <MovieInfoSkeleton />;
  }

  let trailer = trailerData && trailerData.length > 0 ? trailerData[0].key : "";

  return (
    <main>
      <Grid container sx={{ width: "95%", margin: "2rem auto" }}>
        <Grid
          item
          lg={7}
          md={7}
          sm={12}
          xs={12}
          sx={{ marginBottom: "5rem", order: { xs: 2, sm: 2, md: 1, lg: 1 } }}
        >
          <h2
            className="text-3xl font-bold mb-10"
            style={{ display: matches ? "none" : "" }}
          >
            {movieData.title}
          </h2>
          <TrailerSection
            trailer={trailer}
            trailerData={trailerData}
            movieData={movieData}
            currentTrailer={currentTrailer}
            setCurrentTrailer={setCurrentTrailer}
          />
          <p className="text-1xl mb-5">{movieData.overview}</p>
          <CastSection creditData={creditData} />
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            order: { xs: 1, sm: 1, md: 2, lg: 2 },
          }}
        >
          <AsideSection movieData={movieData} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ order: 3 }}>
          <RecommendationSection recommendationData={recommendationData} />
        </Grid>
      </Grid>
    </main>
  );
}
