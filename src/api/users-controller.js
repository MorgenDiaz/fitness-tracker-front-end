import { usersController } from "./fitness-tracker-api";
import { handleErrors } from "./common";

export async function register(username, password) {
  try {
    const serverResponse = await usersController.post(
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

export async function login(username, password) {
  try {
    const serverResponse = await usersController.post(
      `${usersController}login`,
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
