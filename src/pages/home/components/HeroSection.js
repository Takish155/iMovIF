import { Grid, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import {
  heroLeftSection,
  heroRightSection,
  heroPaperStyles,
} from "../../../styles/styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeroSection(props) {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth >= 900 ? (
        <Paper
          elevation={20}
          sx={heroPaperStyles}
          onClick={() =>
            navigate(`movies/info/${props.heroDatas[props.index].id}`)
          }
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item lg={6} md={6} sx={heroLeftSection}>
              <h3 className="text-4xl font-bold mb-2 self-start">
                {props.heroDatas[props.index].original_title} |{" "}
                {!props.heroDatas[props.index].vote_average ? "" : <StarIcon />}{" "}
                {props.heroDatas[props.index].vote_average.toFixed(1)}
              </h3>
              <p className="text-xl font-bold mb-7 self-start">
                {props.heroDatas[props.index].release_date}
                {props.heroDatas[props.index].genre_ids.map((element) => {
                  return " | " + props.genreMap[element];
                })}
              </p>
              <p>{props.heroDatas[props.index].overview}</p>
            </Grid>
            <Grid item lg={6} md={6} sm={6} sx={heroRightSection}>
              <img
                alt={`Poster of the movie ${
                  props.heroDatas[props.index].title
                }`}
                src={`https://image.tmdb.org/t/p/w342${
                  props.heroDatas[props.index].poster_path
                }`}
                className="relative"
              />
            </Grid>
          </Grid>
        </Paper>
      ) : (
        ""
      )}
    </>
  );
}
