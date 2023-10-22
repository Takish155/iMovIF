import { Paper } from "@mui/material";
import { horizontalStyling, paperStyles } from "../../../../styles/styles";
import { useNavigate } from "react-router-dom";

export default function CastSection({ creditData }) {
  const navigate = useNavigate();

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-bold mb-5">Cast</h3>
      <div style={horizontalStyling}>
        {creditData.map((data) => {
          return (
            <Paper
              sx={paperStyles}
              elevation={5}
              onClick={() => navigate(`/people/info/${data.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w154${data.profile_path}`}
                alt={`Face of ${data.original_name}`}
              />
              <h4 className="font-bold text-xs">{data.character}</h4>
              <p>{data.name}</p>
            </Paper>
          );
        })}
      </div>
    </section>
  );
}
