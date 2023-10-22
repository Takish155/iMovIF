import { Grid, Paper, Skeleton } from "@mui/material";

export default function PersonalInfoSectionSkeleton() {
  return (
    <Grid item lg={3} md={4} sm={12} xs={12}>
      <Paper
        elevation={10}
        sx={{
          background: "#121212",
          color: "#fff",
          margin: "2rem auto",
          width: "95%",
        }}
      >
        <article className="mx-auto my-10 w-11/12">
          <Skeleton
            className="posterPicture"
            sx={{
              bgcolor: "grey.900",
              borderRadius: "1rem",
              margin: "0 auto",
              marginBottom: "1.25rem",
              maxWidth: "300px",
              height: "450px",
            }}
            variant="rectangular"
          />
          <Skeleton
            className="title"
            variant="text"
            sx={{
              bgcolor: "grey.900",
              height: "3rem",
              width: "13rem",
              marginBottom: "1.25rem",
            }}
          />
          <div className="mb-3">
            <Skeleton
              className="infoTitle"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2.5rem",
                width: "8rem",
                marginBottom: "0.25rem",
              }}
            />
            <Skeleton
              className="infoDesc"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2rem",
                width: "15rem",
                marginBottom: "0.25rem",
              }}
            />
          </div>
          <div className="mb-3">
            <Skeleton
              className="infoTitle"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2.5rem",
                width: "8rem",
                marginBottom: "0.25rem",
              }}
            />
            <Skeleton
              className="infoDesc"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2rem",
                width: "15rem",
                marginBottom: "0.25rem",
              }}
            />
          </div>
          <div className="mb-3">
            <Skeleton
              className="infoTitle"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2.5rem",
                width: "8rem",
                marginBottom: "0.25rem",
              }}
            />
            <Skeleton
              className="infoDesc"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2rem",
                width: "15rem",
                marginBottom: "0.25rem",
              }}
            />
          </div>
          <div className="pb-10">
            <Skeleton
              className="infoTitle"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2.5rem",
                width: "8rem",
                marginBottom: "0.25rem",
              }}
            />
            <Skeleton
              className="infoDesc"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2rem",
                width: "15rem",
                marginBottom: "0.25rem",
              }}
            />
            <Skeleton
              className="infoDesc"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2rem",
                width: "15rem",
                marginBottom: "0.25rem",
              }}
            />
            <Skeleton
              className="infoDesc"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2rem",
                width: "15rem",
                marginBottom: "0.25rem",
              }}
            />
            <Skeleton
              className="infoDesc"
              variant="text"
              sx={{
                bgcolor: "grey.900",
                height: "2rem",
                width: "15rem",
              }}
            />
          </div>
        </article>
      </Paper>
    </Grid>
  );
}
