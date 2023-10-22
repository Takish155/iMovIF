import { Grid, Paper } from "@mui/material";
import { paperStyles } from "../styles/styles";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

export default function Section({ dataName }) {
  const navigate = useNavigate();

  return (
    <>
      {dataName.map((data) => {
        return (
          <Grid
            key={data.id}
            item
            lg={2}
            sx={{
              paddingBottom: "2rem",
              position: "relative",
            }}
          >
            <Paper
              sx={paperStyles}
              elevation={5}
              onClick={() => {
                navigate(`/movies/info/${data.id}`);
              }}
            >
              {!data.poster_path ? (
                <img
                  src={`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`}
                  alt="img not available"
                  style={{
                    width: "70%",
                    height: "13rem",
                    minHeight: "13rem",
                    marginTop: "0.5rem",
                  }}
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w154${data.poster_path}`}
                  alt={`movie thumbnail of ${data.title}`}
                  style={{
                    width: "70%",
                    height: "13rem",
                    minHeight: "13rem",
                    marginTop: "0.5rem",
                  }}
                />
              )}
              {data.vote_average !== 0 && data.vote_average !== null ? (
                <Paper
                  elevation={5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    color: "#fff",
                    position: "absolute",
                    bottom: "10rem",
                    left: "1rem",
                    height: "1.5rem",
                    width: "30%",
                    backgroundColor: "#121212",
                  }}
                >
                  <StarIcon />
                  {parseFloat(data.vote_average.toFixed(1))}
                </Paper>
              ) : (
                ""
              )}
              <h3 className="font-bold text-center">{data.title}</h3>
              <h3 className="justify-end">{data.release_date}</h3>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
}
