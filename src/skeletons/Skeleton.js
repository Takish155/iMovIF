import { Grid, Paper, Skeleton } from "@mui/material";
import { nonHoverPaperStyles } from "../styles/styles";

export default function SkeletonComponent() {
  return (
    <Grid item lg={2} sx={{ backgroundColor: "" }}>
      <Paper sx={nonHoverPaperStyles}>
        <div className="flex flex-col justify-center items-center h-80 gap-4">
          <Skeleton
            variant="rectangular"
            width={150}
            height={225}
            sx={{ bgcolor: "grey.900" }}
          />
          <Skeleton variant="h1" width={160} sx={{ bgcolor: "grey.900" }} />
          <Skeleton variant="text" width={100} sx={{ bgcolor: "grey.900" }} />
        </div>
      </Paper>
    </Grid>
  );
}
