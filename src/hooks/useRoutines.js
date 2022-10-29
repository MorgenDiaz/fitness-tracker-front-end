import { useState, useEffect } from "react";
import { useContext } from "react";

import { getAll } from "../api/routines-controller";
import { StateContext } from "../context/StateContext";

export const useAllPublicRoutines = () => {
  const [routines, setRoutines] = useState(null);
  const [error, setError] = useState("");
  const { setIsLoading } = useContext(StateContext);

  useEffect(() => {
    setIsLoading(true);

    const getPublicRoutines = async () => {
      try {
        const data = await getAll();
        setRoutines(data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    getPublicRoutines();
  }, [setIsLoading]);

  return { routines, error };
};
