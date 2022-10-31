import { routinesController } from "./fitness-tracker-api";
import { handleErrors } from "./common";

export async function getAllPublicRoutines() {
  try {
    const serverResponse = await routinesController.get();

    return serverResponse.data;
  } catch (error) {
    handleErrors(error);
  }
}

export async function createRoutine(token, routine) {
  try {
    const config = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const serverResponse = await routinesController.post("", routine, config);

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export async function updateRoutine(token, routineId, routine) {
  try {
    const config = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const serverResponse = await routinesController.patch(
      `${routineId}`,
      routine,
      config
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export async function deleteRoutine(token, routineId) {
  try {
    const config = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const serverResponse = await routinesController.delete(
      `${routineId}`,
      config
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}

export async function createRoutineActivity(token, routineId, routineActivity) {
  try {
    console.log("Chuuh");
    const config = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const serverResponse = await routinesController.post(
      `${routineId}/activities`,
      config,
      routineActivity
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}
