import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      style={{
        borderTop: "0.5px solid grey",
        margin: "10rem auto 0 auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "90%",
        height: "45vh",
      }}
    >
      <div className="flex self-start justify-center items-center mb-10">
        <a
          href="https://github.com/Takish155/iMovIF"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon sx={{ fontSize: "3rem", marginRight: "1rem" }} />
        </a>
        <Typography
          variant="h6"
          onClick={() => navigate("/")}
          sx={{
            fontWeight: "700",
            color: "rgba(255, 255, 255, 0.7)",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          iMovIF
        </Typography>
      </div>
      <a
        href="https://developer.themoviedb.org/reference/intro/getting-started"
        target="_blank"
        className="inline-block"
        rel="noreferrer"
      >
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          style={{ width: "30rem", marginBottom: "2rem", cursor: "pointer" }}
          alt="logo of TMDB API"
        />
      </a>
      <p className="text-xl text-center mb-5">
        This website uses the{" "}
        <a
          href="https://developer.themoviedb.org/reference/intro/getting-started"
          target="_blank"
          className="underline"
          rel="noreferrer"
        >
          TMDB API
        </a>{" "}
        but is not endorsed or certified by{" "}
        <a
          href="https://www.themoviedb.org/?language=en-US"
          target="_blank"
          className="underline text-center"
          rel="noreferrer"
        >
          TMDB
        </a>
        .
      </p>
      <p className="text-xl">Made with &hearts; in Japan</p>
    </footer>
  );
}
