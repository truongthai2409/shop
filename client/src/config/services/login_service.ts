// import axios from 'axios';

import { LoginData, LoginResponse } from "../../types";
import http from "../api/api_config";

export const loginSevice = async (loginData: LoginData): Promise<LoginResponse> => {
  return http().post('/auth/login', loginData);
}