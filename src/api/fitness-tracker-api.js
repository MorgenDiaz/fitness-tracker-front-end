import axios from "axios";

const API_URL = "https://gentle-depths-07458.herokuapp.com/api/";

const fitnessTrackerApi = axios.create({
  baseURL: API_URL,
});

export default fitnessTrackerApi;
