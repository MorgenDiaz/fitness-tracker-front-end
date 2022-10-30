import { useState, useEffect, useContext, useCallback } from "react";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext";
import {
  getAll,
  createRoutine,
  updateRoutine,
  deleteRoutine,
} from "../api/routines-controller";

export const useRoutines = () => {
  const [routines, setRoutines] = useState(null);
  const [error, setError] = useState("");
  const { setIsLoading } = useContext(StateContext);
  const { user } = useContext(UserContext);

  const refreshRoutines = useCallback(async () => {
    setIsLoading(true);

    try {
      const responseData = await getAll();
      setRoutines(responseData);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, [setIsLoading]);

  const create = useCallback(
    async (routine) => {
      setIsLoading(true);
      let success = false;

      try {
        await createRoutine(user.token, routine);
        success = true;
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
      return success;
    },
    [setIsLoading, user.token]
  );

  const update = useCallback(
    async (routineId, routine) => {
      setIsLoading(true);
      let success = false;

      try {
        await updateRoutine(user.token, routineId, routine);
        success = true;
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
      return success;
    },
    [setIsLoading, user.token]
  );

  const destroy = useCallback(
    async (routineId, routine) => {
      setIsLoading(true);
      let success = false;

      try {
        await deleteRoutine(user.token, routineId);
        success = true;
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
      return success;
    },
    [setIsLoading, user.token]
  );

  useEffect(() => {
    refreshRoutines();
  }, [refreshRoutines]);

  return { routines, refreshRoutines, create, update, destroy, error };
};
