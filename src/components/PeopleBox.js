import { Paper } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { peopleImage, peoplePaper } from "../styles/styles";

export default function PeopleBox({ dataName }) {
  const navigate = useNavigate();
  return (
    <>
      {dataName.pages.map((pageData, pageIndex) => {
        return (
          <React.Fragment key={pageIndex}>
            {pageData.results.map((data) => {
              return (
                <Paper
                  key={data.id}
                  elevation={10}
                  sx={peoplePaper}
                  onClick={() => navigate(`info/${data.id}`)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300${data.profile_path}`}
                    style={peopleImage}
                    alt={`pic of ${data.name}, a famous person`}
                  />
                  <h3 className="font-bold text-xl text-center uppercase">
                    {data.name}
                  </h3>
                  <p className="text-center">
                    {data.known_for &&
                      data.known_for.map((knownFor, index) => {
                        if (knownFor && knownFor.title) {
                          return (
                            <Link
                              key={100 + index}
                              to={`/movies/info/${knownFor.id}`}
                              style={{
                                textDecoration: "underline",
                                marginRight: "0.5rem",
                              }}
                            >
                              {knownFor.title}
                            </Link>
                          );
                        }
                        return "";
                      })}
                  </p>
                </Paper>
              );
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}
