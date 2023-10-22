import { Grid, Paper, Skeleton } from "@mui/material";
import {
  heroLeftSection,
  heroRightSection,
  paperStyles,
} from "../styles/styles";
const { v4: uuidv4 } = require("uuid");

const uuid = uuidv4();

export default function HeroSkeleton() {
  return (
    <Paper elevation={20} sx={paperStyles}>
      <Grid container sx={{ justifyContent: "center" }} key={uuid}>
        <Grid item lg={6} sx={heroLeftSection}>
          <Skeleton variant="text" width={500} height={60} />
          <Skeleton variant="text" width={400} height={50} />
          <Skeleton variant="text" width={600} />
          <Skeleton variant="text" width={600} />
          <Skeleton variant="text" width={600} />
          <Skeleton variant="text" width={600} />
          <Skeleton variant="text" width={600} />
          <Skeleton variant="text" width={600} />
        </Grid>
        <Grid item lg={6} sx={heroRightSection}>
          <Skeleton variant="rectangular" width={350} height={518} />
        </Grid>
      </Grid>
    </Paper>
  );
}
