import { Paper, Skeleton } from "@mui/material";
import { peopleImageSkeleton, peoplePaper } from "../styles/styles";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function PeopleSkeleton() {
  return (
    <>
      {arr.map((_, index) => {
        return (
          <Paper sx={peoplePaper} key={200 + index}>
            <Skeleton sx={peopleImageSkeleton} variant="rectangular" />
            <Skeleton
              variant="text"
              sx={{
                bgcolor: "grey.900",
                width: "10rem",
                height: "2rem",
                margin: "0 auto",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                bgcolor: "grey.900",
                width: "13rem",
                height: "1.5rem",
                margin: "0 auto",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                bgcolor: "grey.900",
                width: "13rem",
                height: "1.5rem",
                margin: "0 auto",
              }}
            />
          </Paper>
        );
      })}
    </>
  );
}
