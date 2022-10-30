import { usersController } from "./fitness-tracker-api";
import { handleErrors } from "./common";

export async function register(username, password) {
  try {
    const serverResponse = await usersController.post(`register`, {
      username,
      password,
    });

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export async function login(username, password) {
  try {
    const serverResponse = await usersController.post(`login`, {
      username,
      password,
    });

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export async function getRoutines(username, token) {
  console.log("getting: ", username, token);
  try {
    const config = {};
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const serverResponse = await usersController.get(
      `${username}/routines`,
      config
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}
