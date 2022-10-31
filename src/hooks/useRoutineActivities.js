import { useState, useContext, useCallback } from "react";
import { updateRoutineActivity } from "../api/routine-activities-controller";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext";

export const useRoutineActivities = () => {
  const [error, setError] = useState("");
  const { setIsLoading } = useContext(StateContext);
  const { user } = useContext(UserContext);

  const update = useCallback(
    async (routineActivityId, routineActivity) => {
      setIsLoading(true);
      let success = false;

      try {
        await updateRoutineActivity(
          user?.token,
          routineActivityId,
          routineActivity
        );
        success = true;
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
      return success;
    },
    [setIsLoading, user?.token]
  );

  return { update, error };
};
