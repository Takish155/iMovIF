import { FormControl, MenuItem, Select } from "@mui/material";
import { useMovieContext } from "../MovieContext";

export default function SortMenu() {
  const { movieState, movieGenreDataState } = useMovieContext();
  const { sort, setSort } = movieGenreDataState;
  const { matches600px } = movieState;
  return (
    <FormControl
      sx={{
        width: matches600px ? "90%" : "19rem",
        margin: matches600px ? "1rem auto" : "",
        "& .MuiOutlinedInput-input": {
          color: "#fff",
        },
        "& .MuiInputLabel-root": {
          color: "#fff",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#808080",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "grey",
          },
      }}
    >
      <Select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        sx={{
          color: "white",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#D3D3D3",
            },
            "&:hover fieldset": {
              borderColor: "#D3D3D3",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#D3D3D3",
            },
          },
        }}
      >
        <MenuItem value={"popularity.desc"}>Popularity Descending</MenuItem>
        <MenuItem value={"popularity.asc"}>Popularity Ascending</MenuItem>
        <MenuItem value={"release_date.desc"}>Release Date Descending</MenuItem>
        <MenuItem value={"release_date.asc"}>Release Date Ascending</MenuItem>
        <MenuItem value={"revenue.desc"}>Revenue Descending</MenuItem>
        <MenuItem value={"revenue.asc"}>Revenue Ascending</MenuItem>
        <MenuItem value={"primary_release_date.desc"}>
          Primary Release Date Descending
        </MenuItem>
        <MenuItem value={"primary_release_date.asc"}>
          Primary Release Date Ascending
        </MenuItem>
        <MenuItem value={"original_title.desc"}>
          Original Title Descending
        </MenuItem>
        <MenuItem value={"original_title.asc"}>
          Original Title Ascending
        </MenuItem>
        <MenuItem value={"vote_average.desc"}>Vote Average Descending</MenuItem>
        <MenuItem value={"vote_average.asc"}>Vote Average Ascending</MenuItem>
        <MenuItem value={"vote_count.desc"}>Vote Count Descending</MenuItem>
        <MenuItem value={"vote_count.asc"}>Vote Count Ascending</MenuItem>
      </Select>
    </FormControl>
  );
}
