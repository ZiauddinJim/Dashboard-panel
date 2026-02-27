import axios from "axios";

export const http = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app",
});

// Add a request interceptor
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
