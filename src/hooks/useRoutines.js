import { useGet } from "./useApi";
import { getAll } from "../api/routines-controller";

export const useAllPublicRoutines = () => {
  return useGet(getAll, "routines");
};
