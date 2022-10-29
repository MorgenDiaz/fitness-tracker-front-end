import { routinesController } from "./fitness-tracker-api";
import { handleErrors } from "./common";

export async function getAll() {
  try {
    const serverResponse = await routinesController.get();

    return serverResponse.data;
  } catch (error) {
    handleErrors(error);
  }
}
