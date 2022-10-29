import fitnessTrackerApi from "./fitness-tracker-api";
import { handleErrors } from "./common";
const routinesController = "routines/";

export async function getAll() {
  try {
    const serverResponse = await fitnessTrackerApi.get(`${routinesController}`);

    return serverResponse.data;
  } catch (error) {
    handleErrors(error);
  }
}
