import { Paper, Skeleton } from "@mui/material";
import { nonHoverPaperStyles } from "../styles/styles";

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
export default function InfiniteQuerySkeleton() {
  return (
    <>
      {arr.map((_, index) => {
        return (
          <Paper sx={nonHoverPaperStyles} key={index}>
            <div className="flex flex-col justify-center items-center h-80 gap-4">
              <Skeleton
                variant="rectangular"
                width={150}
                height={225}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton variant="h1" width={160} sx={{ bgcolor: "grey.900" }} />
              <Skeleton
                variant="text"
                width={100}
                sx={{ bgcolor: "grey.900" }}
              />
            </div>
          </Paper>
        );
      })}
    </>
  );
}
