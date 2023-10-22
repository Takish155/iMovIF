import { useHomeContext } from "../HomeContext";
import { useEffect, useState } from "react";
import HeroSkeleton from "../../../skeletons/HeroSkeleton";
import HeroSection from "./HeroSection";

export const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export default function Hero() {
  const { trendQuery, topRatedQuery } = useHomeContext();
  const { data: topRated, isLoading: isLoadingRated } = topRatedQuery;
  const { data: trends, isLoading: isLoadingTrends } = trendQuery;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevCount) => {
        if (prevCount >= 4) {
          return 0;
        } else {
          return prevCount + 1;
        }
      });
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  if (isLoadingRated || isLoadingTrends) {
    return <HeroSkeleton />;
  }

  const heroDatas = [
    topRated[0],
    trends[0],
    topRated[1],
    trends[1],
    topRated[2],
    trends[2],
  ];

  return (
    <HeroSection heroDatas={heroDatas} index={index} genreMap={genreMap} />
  );
}
