import axios from "axios";

const API_URL = "https://gentle-depths-07458.herokuapp.com/api/";
const usersController = "users/";

const fitnessTrackerApi = axios.create({
  baseURL: API_URL,
});

function handleErrors(error) {
  if (error.response) {
    const { data: apiError } = error.response;
    console.error("response: ", error.response.data);

    throw new Error(apiError.message);
  } else {
    throw new Error("An unexpected error occurred while making your request.");
  }
}

export async function register(username, password) {
  try {
    const serverResponse = await fitnessTrackerApi.post(
      `${usersController}register`,
      {
        username,
        password,
      }
    );

    console.log("good response: ", serverResponse);
    return serverResponse.data;
  } catch (error) {
    console.error(error);
    handleErrors(error);
  }
}
