import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export function getPhones() {
  return http.get("/").then((res) => res.data);
}