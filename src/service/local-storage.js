import { useState } from "react";

function getInitialState(key) {
  try {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : {};
  } catch (error) {
    console.log(error);
  }

  return {};
}

export function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(getInitialState(key));

  const setValue = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
