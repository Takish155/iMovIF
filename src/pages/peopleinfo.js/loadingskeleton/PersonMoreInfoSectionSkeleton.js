import { Grid, Skeleton } from "@mui/material";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function PersonMoreInfoSectionSkeleton() {
  return (
    <Grid item lg={9} md={8} sm={12} xs={12} sx={{ margin: "5rem 0" }}>
      <article className="w-11/12 mx-auto">
        <Skeleton
          variant="text"
          sx={{
            bgcolor: "grey.900",
            marginBottom: "1.25rem",
            width: "18rem",
            height: "4rem",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            bgcolor: "grey.900",
            marginBottom: "1.25rem",
            width: "7rem",
            height: "2rem",
          }}
        />
        {arr.map((_, index) => {
          return (
            <Skeleton
              key={index + 9231}
              className="biographyText"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                marginBottom: "0.1rem",
                width: "90%",
                height: "2.3rem",
              }}
            />
          );
        })}
        <Skeleton
          variant="text"
          sx={{
            bgcolor: "grey.900",
            marginBottom: "1.25rem",
            width: "12rem",
            height: "3.5rem",
          }}
        />
      </article>
    </Grid>
  );
}
