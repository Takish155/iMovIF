import { createContext, useContext } from "react";
import useGetPeopleInfo from "../../hooks/peopleinfo/useGetPeopleInfo";
import useGetPeopleMovieCredits from "../../hooks/peopleinfo/useGetPeopleMovieCredits";

const GetPeopleInfoStateContext = createContext();
const GetPeopleMovieCreditsStateContext = createContext();

export function PeopleInfoProvider({ children }) {
  const getPeopleInfoState = useGetPeopleInfo();
  const getPeopleMovieCreditsState = useGetPeopleMovieCredits();

  return (
    <GetPeopleInfoStateContext.Provider value={getPeopleInfoState}>
      <GetPeopleMovieCreditsStateContext.Provider
        value={getPeopleMovieCreditsState}
      >
        {children}
      </GetPeopleMovieCreditsStateContext.Provider>
    </GetPeopleInfoStateContext.Provider>
  );
}

export function useGetPeopleInfoContext() {
  return useContext(GetPeopleInfoStateContext);
}
export function useGetPeopleMovieCreditsContext() {
  return useContext(GetPeopleMovieCreditsStateContext);
}
