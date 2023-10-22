import { FormControl, Select, MenuItem } from "@mui/material";
import { usePopularPeopleQueryContext } from "../PeopleContext";

export default function SortPeople() {
  const { sort, setSort } = usePopularPeopleQueryContext();
  return (
    <FormControl
      sx={{
        width: "20rem",
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
          borderColor: "white",
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
        <MenuItem value="popular">Popular</MenuItem>
        <MenuItem value="dayTrending">Trending Today</MenuItem>
        <MenuItem value="weekTrending">Trending This Week</MenuItem>
      </Select>
    </FormControl>
  );
}
