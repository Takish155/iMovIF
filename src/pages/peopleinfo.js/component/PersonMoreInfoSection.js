import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  useGetPeopleInfoContext,
  useGetPeopleMovieCreditsContext,
} from "../PeopleContext";

import { horizontalStyling, paperStyles } from "../../../styles/styles";
import { useNavigate } from "react-router-dom";

export default function PersonMoreInfoSection() {
  const navigate = useNavigate();
  const { getPeopleInfoData } = useGetPeopleInfoContext();

  const { getPeopleMovieCreditsData } = useGetPeopleMovieCreditsContext();

  return (
    <Grid item lg={9} md={8} sm={12} xs={12} sx={{ margin: "5rem 0" }}>
      <article className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold mb-5">{getPeopleInfoData.name}</h2>
        <Accordion
          defaultExpanded
          sx={{ background: "#121212", color: "#fff" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          >
            <Typography>Biography</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              className="text-xl leading-9"
              sx={{ fontSize: "1.25rem", lineHeight: "2.25rem" }}
            >
              {getPeopleInfoData.biography}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {getPeopleMovieCreditsData.length === 0 ? (
          ""
        ) : (
          <>
            <h3 className="text-2xl my-10 font-bold">Known For</h3>

            <section style={horizontalStyling}>
              {getPeopleMovieCreditsData.map((element, index) => {
                return (
                  <Paper
                    key={index + 3000}
                    sx={paperStyles}
                    onClick={() => navigate(`/movies/info/${element.id}`)}
                  >
                    {!element.poster_path ? (
                      <img
                        className="rounded-2xl mx-auto mb-5"
                        src={`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`}
                        alt="img not available"
                      />
                    ) : (
                      <img
                        src={`https://image.tmdb.org/t/p/w185${element.poster_path}`}
                        alt={`Poster pic of ${element.name}, ${getPeopleInfoData.name} casted for.`}
                      />
                    )}
                    <p className="font-bold text-xl">{element.character}</p>
                  </Paper>
                );
              })}
            </section>
          </>
        )}
      </article>
    </Grid>
  );
}
