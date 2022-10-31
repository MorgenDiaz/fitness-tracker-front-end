import { useState, useEffect, useContext, useCallback } from "react";
import { getRoutines } from "../api/users-controller";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext";

export const useUsers = () => {
  const [routines, setRoutines] = useState(null);
  const [error, setError] = useState("");
  const { setIsLoading } = useContext(StateContext);
  const { user } = useContext(UserContext);

  const refreshRoutines = useCallback(async () => {
    setIsLoading(true);

    try {
      const responseData = await getRoutines(user.username, user.token);
      console.log(responseData);
      setRoutines(responseData);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, [setIsLoading, user.username, user.token]);

  useEffect(() => {
    refreshRoutines();
  }, [refreshRoutines]);

  return { routines, refreshRoutines, error };
};
