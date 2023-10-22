import { Grid, Paper } from "@mui/material";
import { paperStyles2 } from "../styles/styles";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import React from "react";

export default function UnlimitedSection({ dataName }) {
  const navigate = useNavigate();

  return (
    <>
      {dataName.map((pageData, pageIndex) => {
        return (
          <React.Fragment key={pageIndex}>
            {pageData.results.map((data) => {
              return (
                <Grid
                  key={data.id}
                  item
                  lg={2}
                  sx={{
                    paddingBottom: "2rem",
                    position: "relative",
                    width: "10rem",
                    height: "20rem",
                  }}
                >
                  <Paper
                    sx={paperStyles2}
                    elevation={5}
                    onClick={() => {
                      navigate(`/movies/info/${data.id}`);
                    }}
                  >
                    {!data.poster_path ? (
                      <img
                        src={`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`}
                        alt="img not available"
                        width={"150px"}
                        height={"225px"}
                        className="mt-2 mb-10"
                      />
                    ) : (
                      <img
                        width={"150px"}
                        height={"225px"}
                        src={`https://image.tmdb.org/t/p/w154${data.poster_path}`}
                        alt={`movie thumbnail of ${data.title}`}
                        className="mt-2"
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
                          bottom: "6rem",
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
                    <h3
                      className="font-bold text-center"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {data.title}
                    </h3>
                    <h3 style={{ fontSize: "0.9rem" }}>{data.release_date}</h3>
                  </Paper>
                </Grid>
              );
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}
