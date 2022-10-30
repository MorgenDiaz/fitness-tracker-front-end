import { useState, useEffect, useContext, useCallback } from "react";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext";
import {
  getAllActivities,
  createActivity,
  updateActivity,
} from "../api/activities-controller";

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

  const create = useCallback(
    async (activity) => {
      setIsLoading(true);
      let success = false;
      try {
        await createActivity(user?.token, activity);
        success = true;
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
      return success;
    },
    [setIsLoading, user?.token]
  );

  const update = useCallback(
    async (activityId, activity) => {
      setIsLoading(true);
      let success = false;
      try {
        await updateActivity(user?.token, activityId, activity);
        success = true;
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
      return success;
    },
    [setIsLoading, user?.token]
  );

  useEffect(() => {
    refreshActivities();
  }, [refreshActivities]);

  return { activities, refreshActivities, create, update, error };
};
