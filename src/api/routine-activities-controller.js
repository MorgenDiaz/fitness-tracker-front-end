import { routineActivitiesController } from "./fitness-tracker-api";
import { handleErrors } from "./common";
export async function updateRoutineActivity(
  token,
  routineActivityId,
  routineActivity
) {
  try {
    const config = {};

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const serverResponse = await routineActivitiesController.patch(
      `${routineActivityId}`,
      routineActivity,
      config
    );

    return serverResponse.data;
  } catch (error) {
    handleErrors(error);
  }
}
