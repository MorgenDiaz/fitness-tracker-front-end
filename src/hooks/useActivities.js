import { useState, useEffect, useContext, useCallback } from "react";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext";
import { getAllActivities } from "../api/activities-controller";

export const useActivities = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState("");
  const { setIsLoading } = useContext(StateContext);

  const { user } = useContext(UserContext);

  const refreshActivities = useCallback(async () => {
    setIsLoading(true);

    try {
      const responseData = await getAllActivities();
      setActivities(responseData);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    refreshActivities();
  }, [refreshActivities]);

  return { activities, refreshActivities, error };
};
