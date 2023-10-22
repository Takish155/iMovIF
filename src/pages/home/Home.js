import { Grid, FormControl, MenuItem, Select } from "@mui/material";
import Trending from "./components/Trending";
import TopRated from "./components/TopRated";
import { horizontalStyling } from "../../styles/styles";
import Upcoming from "./components/Upcoming";
import { useHomeContext } from "./HomeContext";
import Hero from "./components/Hero";

export default function Home() {
  const { setTrendDate, trendDate } = useHomeContext();
  return (
    <main className="w-full">
      <article>
        <Hero />
        <section className="mx-auto my-10 w-11/12">
          <div className="flex items-center gap-5 mb-6">
            <h2 className="uppercase text-2xl font-bold mb-3">
              Trending this:
            </h2>
            <FormControl
              sx={{
                width: "15rem",
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
                onChange={(e) => setTrendDate(e.target.value)}
                value={trendDate}
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "color",
                    },
                    "&:hover fieldset": {
                      borderColor: "color",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "color",
                    },
                  },
                }}
              >
                <MenuItem defaultValue value={"day"}>
                  Day
                </MenuItem>
                <MenuItem value={"week"}>Week</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Grid container sx={horizontalStyling}>
            <Trending />
          </Grid>
        </section>
        <section className="mx-auto my-10 w-11/12">
          <h2 className="uppercase text-2xl font-bold mb-3">Top Rated</h2>
          <Grid container sx={horizontalStyling}>
            <TopRated />
          </Grid>
        </section>
        <section className="mx-auto my-10 w-11/12">
          <h2 className="uppercase text-2xl font-bold mb-3">Upcoming</h2>
          <Grid container sx={horizontalStyling}>
            <Upcoming />
          </Grid>
        </section>
      </article>
    </main>
  );
}
