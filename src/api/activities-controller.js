import { activitiesController } from "./fitness-tracker-api";
import { handleErrors } from "./common";

export async function getAllActivities() {
  try {
    const serverResponse = await activitiesController.get();

    return serverResponse.data;
  } catch (error) {
    handleErrors(error);
  }
}

export async function createActivity(token, activity) {
  try {
    const config = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const serverResponse = await activitiesController.post(
      "",
      activity,
      config
    );

    return serverResponse.data;
  } catch (error) {
    handleErrors(error);
  }
}

export async function updateActivity(token, activityId, activity) {
  try {
    const config = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const serverResponse = await activitiesController.patch(
      `${activityId}`,
      activity,
      config
    );

    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}
