import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const API_KEYS = process.env.REACT_APP_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEYS}`,
  },
};

export default function useGetPeopleInfo() {
  const navigate = useNavigate();

  const { id } = useParams();
  async function fetchPeopleInfo() {
    const url = `https://api.themoviedb.org/3/person/${id}?language=en-US'`;
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  }

  const {
    data: getPeopleInfoData,
    isLoading: getPeopleInfoDataLoading,
    isFetching: getPeopleInfoDataFetching,
  } = useQuery(["peopleInfo", id], fetchPeopleInfo, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    onError: (err) => {
      navigate("/error");
      console.log(err);
    },
  });

  return {
    getPeopleInfoData,
    getPeopleInfoDataLoading,
    getPeopleInfoDataFetching,
  };
}
