import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//react hooks by conventions need to have the word 'use' at the start
export const useActivities = () => {
  const { data: activities, isPending } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await axios.get<Activity[]>(
        "https://localhost:5001/api/activities",
      );
      return response.data;
    },
  });
  return {
    activities,
    isPending,
  };
};
