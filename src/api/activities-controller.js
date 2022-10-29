import { activitiesController } from "./fitness-tracker-api";
import { handleErrors } from "./common";

export async function getAll() {
  try {
    const serverResponse = await activitiesController.get();

    return serverResponse.data;
  } catch (error) {
    console.log(error);
    handleErrors(error);
  }
}
