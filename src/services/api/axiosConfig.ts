import axios from "axios";
const url = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: url,
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default api;
