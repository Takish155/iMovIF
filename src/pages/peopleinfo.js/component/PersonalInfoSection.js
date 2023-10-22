import { Grid, Paper } from "@mui/material";
import { useGetPeopleInfoContext } from "../PeopleContext";

export default function PersonalInfoSection() {
  const { getPeopleInfoData } = useGetPeopleInfoContext();
  return (
    <Grid item lg={3} md={4} sm={12} xs={12}>
      <Paper
        elevation={10}
        sx={{ background: "#121212", color: "#fff", margin: "2rem 0" }}
      >
        <article className="mx-auto my-10 w-11/12">
          {!getPeopleInfoData.profile_path ? (
            <img
              className="rounded-2xl mx-auto mb-5"
              src={`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`}
              alt="img not available"
            />
          ) : (
            <img
              className="rounded-2xl mx-auto mb-5"
              src={`https://image.tmdb.org/t/p/w300${getPeopleInfoData.profile_path}`}
              alt={`pic of ${getPeopleInfoData.name}, an actor`}
            />
          )}
          <h2 className="text-2xl font-bold uppercase mb-5">Personal info</h2>
          <section className="pb-5">
            {!getPeopleInfoData ? (
              ""
            ) : (
              <div className="mb-3">
                <h3 className="text-xl font-bold mb-1">Known For</h3>
                <p>{getPeopleInfoData.known_for_department}</p>
              </div>
            )}
            {!getPeopleInfoData.birthday ? (
              ""
            ) : (
              <div className="mb-3">
                <h3 className="text-xl font-bold mb-1">Birthday</h3>
                <p>{getPeopleInfoData.birthday}</p>
              </div>
            )}
            {!getPeopleInfoData.place_of_birth ? (
              ""
            ) : (
              <div className="mb-7">
                <h3 className="text-xl font-bold mb-1">Birthplace</h3>
                <p>{getPeopleInfoData.place_of_birth}</p>
              </div>
            )}
            {getPeopleInfoData.also_known_as.length === 0 ? (
              ""
            ) : (
              <div className="mb-3">
                <h3 className="text-xl font-bold mb-1">As Known As</h3>
                <ul>
                  {getPeopleInfoData.also_known_as.map((element, index) => {
                    return <li key={index + 2000}>{element}</li>;
                  })}
                </ul>
              </div>
            )}
          </section>
        </article>
      </Paper>
    </Grid>
  );
}
