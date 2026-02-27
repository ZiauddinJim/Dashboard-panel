import { http } from "./http";

export const getOverView = async () => {
  const { data } = await http.get("/api/overview");
  return data;
};

export const getAnalytics = async () => {
  const { data } = await http.get("/api/analytics");
  return data;
};

export const getUsers = async () => {
  const { data } = await http.get("/api/users");
  return data;
};

export const getProducts = async () => {
  const { data } = await http.get("/api/products");
  return data;
};

export const getDashboardAll = async () => {
  const { data } = await http.get("/api/dashboard");
  return data;
};
