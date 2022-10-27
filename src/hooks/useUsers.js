import { useState, useEffect } from "react";
import { register } from "../api/users-controller";

export const useRegisterUser = (username, password) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function registerUser() {
      try {
        const data = await register(username, password);
        setData(data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    }

    registerUser();

    return { data, isLoading, error };
  }, [username, password]);
};
