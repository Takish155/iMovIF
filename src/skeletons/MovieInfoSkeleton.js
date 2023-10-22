import { Grid, Skeleton } from "@mui/material";

export default function MovieInfoSkeleton() {
  return (
    <>
      <Grid container spacing={0} sx={{ width: "95%", margin: "0 auto" }}>
        <Grid
          item
          lg={7}
          md={7}
          sm={12}
          xs={12}
          sx={{
            marginBottom: "5rem",
            width: "92vh",
            order: { xs: 2, sm: 2, md: 1, lg: 1 },
          }}
        >
          <Skeleton
            variant="text"
            sx={{
              margin: "1rem 0",
              width: "25rem",
              height: "4rem",
              bgcolor: "grey.900",
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              bgcolor: "grey.900",
              width: "100%",
              height: "50%",
              marginBottom: "1rem",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              marginBottom: "2.5rem",
              width: "10rem",
              height: "3rem",
              bgcolor: "grey.900",
            }}
          />
          <div className="flex gap-5">
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: "grey.900", width: "30%", height: "7rem" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: "grey.900", width: "30%", height: "7rem" }}
            />
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: "grey.900", width: "30%", height: "7rem" }}
            />
          </div>
          <Skeleton
            variant="text"
            sx={{
              marginTop: "2.5rem",
              width: "90%",
              height: "2rem",
              bgcolor: "grey.900",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "90%",
              height: "2rem",
              bgcolor: "grey.900",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "90%",
              height: "2rem",
              bgcolor: "grey.900",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              width: "90%",
              height: "2rem",
              bgcolor: "grey.900",
            }}
          />
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "2rem",
            order: { xs: 1, sm: 1, md: 2, lg: 2 },
          }}
        >
          <Skeleton
            variant="rectangular"
            sx={{
              bgcolor: "grey.900",
              width: "20rem",
              height: "29rem",
              marginBottom: "1rem",
            }}
          />
          <div>
            <Skeleton
              sx={{
                alignSelf: "flex-start",
                width: "10rem",
                height: "2rem",
                bgcolor: "grey.900",
              }}
            />
            <Skeleton
              sx={{
                width: "20rem",
                height: "1.5rem",
                bgcolor: "grey.900",
                marginBottom: "1rem",
              }}
            />
            <Skeleton
              sx={{
                alignSelf: "flex-start",
                width: "10rem",
                height: "2rem",
                bgcolor: "grey.900",
              }}
            />
            <Skeleton
              sx={{
                width: "20rem",
                height: "1.5rem",
                bgcolor: "grey.900",
                marginBottom: "1rem",
              }}
            />
            <Skeleton
              sx={{
                alignSelf: "flex-start",
                width: "10rem",
                height: "2rem",
                bgcolor: "grey.900",
              }}
            />
            <Skeleton
              sx={{
                width: "20rem",
                height: "1.5rem",
                bgcolor: "grey.900",
                marginBottom: "1rem",
              }}
            />
            <Skeleton
              sx={{
                alignSelf: "flex-start",
                width: "10rem",
                height: "2rem",
                bgcolor: "grey.900",
              }}
            />
            <Skeleton
              sx={{
                width: "20rem",
                height: "1.5rem",
                bgcolor: "grey.900",
                marginBottom: "1rem",
              }}
            />
            <Skeleton
              sx={{
                alignSelf: "flex-start",
                width: "10rem",
                height: "2rem",
                bgcolor: "grey.900",
              }}
            />
            <Skeleton
              sx={{
                width: "20rem",
                height: "1.5rem",
                bgcolor: "grey.900",
                marginBottom: "1rem",
              }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
