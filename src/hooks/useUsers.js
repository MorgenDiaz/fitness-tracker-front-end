import { useState, useEffect } from "react";
import { register } from "../api/users-controller";
import { StateContext } from "../context/StateContext";

export const useRegisterUser = ({ username, password }, execute = true) => {
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

    if (!execute) return { data, isLoading, error };

    registerUser();

    return { data, isLoading, error };
  }, [username, password]);
};
