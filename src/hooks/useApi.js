import { useState, useEffect } from "react";
import { useContext } from "react";
import { StateContext } from "../context/StateContext";

export const useGet = (apiGetRequest, dataAlias) => {
  const [data, setRoutines] = useState(null);
  const [error, setError] = useState("");
  const { setIsLoading } = useContext(StateContext);

  useEffect(() => {
    setIsLoading(true);

    const getPublicRoutines = async () => {
      try {
        const responseData = await apiGetRequest();
        setRoutines(responseData);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    getPublicRoutines();
  }, [apiGetRequest, setIsLoading]);

  const response = { error };
  response[dataAlias] = data;

  return response;
};
