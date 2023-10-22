import React, { createContext, useContext } from "react";
import useGetTrend from "../../hooks/home/useGetTrend";
import useGetTopRated from "../../hooks/home/useGetTopRated";
import useGetUpcoming from "../../hooks/home/useGetUpcoming";

const HomeContext = createContext();

export function HomeProvider({ children }) {
  const { trendQuery, setTrendDate, trendDate } = useGetTrend();
  const topRatedQuery = useGetTopRated();
  const upcomingQuery = useGetUpcoming();

  return (
    <HomeContext.Provider
      value={{
        trendQuery,
        topRatedQuery,
        upcomingQuery,
        setTrendDate,
        trendDate,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  return useContext(HomeContext);
}
