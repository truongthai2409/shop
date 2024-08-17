import { RegisterData, LoginResponse } from "../../types";
import http from "../api/api_config";

export const registerSevice = async (resgister: RegisterData): Promise<LoginResponse> => {
  try {
    return await http().post('/auth/register', resgister)
  } catch (error) {
    console.warn("Error during login:", error);
    throw error;
  }
};
