import axios from "axios";

const API_URL = "https://gentle-depths-07458.herokuapp.com/api/";

export const usersController = axios.create({
  baseURL: API_URL + "users/",
});

export const routinesController = axios.create({
  baseURL: API_URL + "routines/",
});

export const activitiesController = axios.create({
  baseURL: API_URL + "activities/",
});

export const routineActivitiesController = axios.create({
  baseURL: API_URL + "routine_activities/",
});
