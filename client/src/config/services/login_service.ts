import { LoginData, LoginResponse } from "../../types";
import http from "../api/api_config";

export const loginSevice = async (loginData: LoginData): Promise<LoginResponse> => {
  try {
    // return await http().post<any, LoginResponse>('/auth/login', loginData)
    return await http().post('/auth/login', loginData)
  } catch (error) {
    console.warn("Error during login:", error);
    throw error;
  }
};
