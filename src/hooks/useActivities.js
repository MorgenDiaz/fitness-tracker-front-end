import { useGet } from "./useApi";
import { getAll } from "../api/activities-controller";

export function useAllPublicActivities() {
  return useGet(getAll, "activities");
}
