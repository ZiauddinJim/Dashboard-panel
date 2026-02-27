import { endpoints } from "./endpoints";
import { http } from "./http";

export type loginRequest = { email: string; password: string };
export type loginResponse = { id: number; email: string; token: string };

export const LoginApi = async (request: loginRequest) => {
  const { data } = await http.post<loginResponse>(endpoints.login, request);
  return data;
};
