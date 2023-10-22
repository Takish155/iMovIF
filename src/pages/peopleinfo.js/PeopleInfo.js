import { Grid } from "@mui/material";
import PersonalInfoSection from "./component/PersonalInfoSection";
import PersonMoreInfoSection from "./component/PersonMoreInfoSection";
import {
  useGetPeopleInfoContext,
  useGetPeopleMovieCreditsContext,
} from "./PeopleContext";
import PersonalInfoSectionSkeleton from "./loadingskeleton/PersonalInfoSectionSkeleton";
import PersonMoreInfoSectionSkeleton from "./loadingskeleton/PersonMoreInfoSectionSkeleton";

export default function PeopleInfo() {
  const { getPeopleInfoDataLoading, getPeopleInfoDataFetching } =
    useGetPeopleInfoContext();

  const {
    getPeopleMovieCreditsDataLoading,
    getPeopleMovieCreditsDataIsFetching,
  } = useGetPeopleMovieCreditsContext();

  if (
    getPeopleInfoDataLoading ||
    getPeopleInfoDataFetching ||
    getPeopleMovieCreditsDataLoading ||
    getPeopleMovieCreditsDataIsFetching
  ) {
    return (
      <div className="overflow-hidden">
        <Grid container sx={{ width: "95%", margin: "0 auto" }}>
          <PersonalInfoSectionSkeleton />
          <PersonMoreInfoSectionSkeleton />
        </Grid>
      </div>
    );
  }
  return (
    <Grid container sx={{ width: "95%", margin: "0 auto" }}>
      <PersonalInfoSection />
      <PersonMoreInfoSection />
    </Grid>
  );
}
