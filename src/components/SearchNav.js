import { IconButton, InputBase, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchNav() {
  const matches = useMediaQuery("(min-width:900px)");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <InputBase
        name="searchMovie"
        sx={{
          color: "#fff",
          paddingLeft: "2rem",
          width: matches ? "40%" : "40%",
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
  );
}
