import fitnessTrackerApi from "./fitness-tracker-api";
import { handleErrors } from "./common";
const usersController = "users/";

export async function register(username, password) {
  try {
    const serverResponse = await fitnessTrackerApi.post(
      `${usersController}register`,
      {
        username,
        password,
      }
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}
