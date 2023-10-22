import { Paper } from "@mui/material";
import { horizontalStyling, paperStyles } from "../../../../styles/styles";
import { useNavigate } from "react-router-dom";

export default function CastSection({ creditData }) {
  const navigate = useNavigate();

  return (
    <section className="mb-10">
      {creditData.length === 0 ? (
        ""
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-5">Cast</h3>
          <div style={horizontalStyling}>
            {creditData.map((data, index) => {
              return (
                <Paper
                  key={index + 8973892}
                  sx={paperStyles}
                  elevation={5}
                  onClick={() => navigate(`/people/info/${data.id}`)}
                >
                  {!data.profile_path ? (
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
                      src={`https://image.tmdb.org/t/p/w154${data.profile_path}`}
                      alt={`Face of ${data.original_name}`}
                    />
                  )}
                  <h4 className="font-bold text-xs">{data.character}</h4>
                  <p>{data.name}</p>
                </Paper>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
