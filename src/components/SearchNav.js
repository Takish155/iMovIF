import { IconButton, InputBase, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchNav() {
  const matches900 = useMediaQuery("(min-width:900px)");
  const matches600 = useMediaQuery("(max-width:600px)");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  return (
    <>
      {matches600 ? (
        <div className={matches600 ? "flex justify" : ""}>
          <InputBase
            name="searchMovie"
            sx={{
              color: "#fff",
              paddingLeft: "2rem",
              width: matches900 ? "40%" : matches600 ? "90%" : "40%",
            }}
            placeholder="Search movies...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton
            name="searchButton"
            type="button"
            sx={{ p: "20px" }}
            aria-label="search"
            onClick={() => {
              navigate(`movies/search?query=${search}`);
              setSearch("");
            }}
          >
            <SearchIcon sx={{ color: "#fff" }} />
          </IconButton>
        </div>
      ) : (
        <>
          <InputBase
            name="searchMovie"
            sx={{
              color: "#fff",
              paddingLeft: "2rem",
              width: "40%",
            }}
            placeholder="Search movies...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton
            name="searchButton"
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={() => {
              navigate(`movies/search?query=${search}`);
              setSearch("");
            }}
          >
            <SearchIcon sx={{ color: "#fff" }} />
          </IconButton>
        </>
      )}
    </>
  );
}
