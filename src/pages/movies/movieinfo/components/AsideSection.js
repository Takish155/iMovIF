import { Paper, useMediaQuery } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const moneyFormat = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default function AsideSection({ movieData }) {
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <section
      className="w-9/12 relative flex flex-col items-center"
      style={{ marginBottom: matches ? "5rem" : "" }}
    >
      {movieData.vote_average !== 0 && movieData.vote_average !== null ? (
        <Paper
          className="absolute top-1 left-16 flex justify-center items-center"
          sx={{ backgroundColor: "#121212", width: "30%", height: "3rem" }}
        >
          <StarIcon className="text-white" fontSize="large" />
          <p className="text-white text-4xl font-bold">
            {parseFloat(movieData.vote_average.toFixed(1))}
          </p>
        </Paper>
      ) : (
        ""
      )}
      {!movieData.poster_path ? (
        <img
          src={`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`}
          alt={"img not available"}
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w342${movieData.poster_path}`}
          alt={`Poster of ${movieData.title}`}
          className="w-9/12 max-w-6xl"
        />
      )}
      {!movieData.original_title ? (
        ""
      ) : (
        <div className="my-4 border-white w-9/12 border-b">
          <h3 className="font-bold mb-1">Original Title</h3>
          <p>{movieData.original_title}</p>
        </div>
      )}
      {!movieData.status ? (
        ""
      ) : (
        <div className="my-4 border-white w-9/12 border-b">
          <h3 className="font-bold mb-1">Status</h3>
          <p>{movieData.status}</p>
        </div>
      )}
      {!movieData.release_date ? (
        ""
      ) : (
        <div className="my-4 border-white w-9/12 border-b">
          <h3 className="font-bold mb-1">Release Data</h3>
          <p>{movieData.release_date}</p>
        </div>
      )}
      {movieData.genres.length !== 0 ? (
        <div className="my-4 border-white w-9/12 border-b">
          <h3 className="font-bold mb-1">Genre</h3>
          <p>
            {movieData.genres.map((element, index) => {
              return (
                <>
                  <Link
                    className="underline mr-2"
                    to={`/movies/${element.name
                      .replaceAll(" ", "-")
                      .toLowerCase()}`}
                  >
                    {element.name}
                  </Link>
                </>
              );
            })}
          </p>
        </div>
      ) : (
        ""
      )}
      {movieData.production_companies.length !== 0 ? (
        <div className="my-4 border-white w-9/12 border-b">
          <h3 className="font-bold mb-1">Production Companies</h3>
          <p>
            {movieData.production_companies.map((element, index) => {
              return index < movieData.production_companies.length - 1
                ? element.name + ", "
                : element.name;
            })}
          </p>
        </div>
      ) : (
        ""
      )}
      {!movieData.budget ? (
        ""
      ) : (
        <div className="my-4 border-white w-9/12 border-b">
          <h3 className="font-bold mb-1">Movie Budget</h3>
          <p>{moneyFormat.format(movieData.budget)}</p>
        </div>
      )}
      {!movieData.revenue ? (
        ""
      ) : (
        <div className="my-4 border-white w-9/12 border-b">
          <h3 className="font-bold mb-1">Movie Budget</h3>
          <p>{moneyFormat.format(movieData.revenue)}</p>
        </div>
      )}
      {movieData.production_countries.length !== 0 ? (
        <div className="my-4 border-white w-9/12 border-b">
          <h3 className="font-bold mb-1">Country Origin</h3>
          <p>
            {movieData.production_countries.map((element, index) => {
              return index < movieData.production_countries.length - 1
                ? element.name + ", "
                : element.name;
            })}
          </p>
        </div>
      ) : (
        ""
      )}
      {movieData.spoken_languages.length !== 0 ? (
        <div className="my-4 border-white w-9/12 border-b">
          <h3 className="font-bold mb-1">Spoken Languages</h3>
          <p>
            {movieData.spoken_languages.map((element, index) => {
              // return element.name + " ";
              return index < movieData.spoken_languages.length - 1
                ? element.name + ", "
                : element.name;
            })}
          </p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
