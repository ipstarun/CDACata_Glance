import axios from "axios";

export const BASE_URl = "http://localhost:8080";

export const myAxios = axios.create({
  baseURL: BASE_URl,
});
