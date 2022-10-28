import axios from "axios";

// const BASE_URL= "https://myechelon-app.herokuapp.com/api/v1/"
const BASE_URL = "https://myechelon-backend.herokuapp.com/api/v1/"

export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});

export default axios.create({
  baseURL: BASE_URL,
});
