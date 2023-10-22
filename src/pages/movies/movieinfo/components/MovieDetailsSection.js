import { Grid, useMediaQuery } from "@mui/material";

export default function MovieDetailsSection({ movieData }) {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <section>
      <Grid container className="my-20">
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className="border-l border-white pl-4"
          sx={{ marginBottom: matches ? "3rem" : "" }}
        >
          <h3 className="font-bold text-xl">Genres</h3>
          <p className="text-1xl">
            {movieData.genres.map((element) => {
              return element.name + "\xa0\xa0\xa0";
            })}
          </p>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className="border-l border-white pl-4"
        >
          <h3 className="font-bold text-xl">Release Date</h3>
          <p className="text-1xl">{movieData.release_date}</p>
        </Grid>
      </Grid>
    </section>
  );
}
