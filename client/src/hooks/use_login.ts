import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginSevice } from "../config/services/login_service";
import { toast } from "sonner";
import { LoginData, LoginResponse } from "../types";
import { useAppDispatch } from "./use_app_dispatch";
import { loginSuccess } from "../stores/slices/auth_slice";
import store from "../stores";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (data: LoginData) => {
      return loginSevice(data);
    },
    onSuccess(response: LoginResponse) {
      console.log(response)
      dispatch(
        loginSuccess({
          userId: response.user_id,
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
          isAuthenticated: true,
        })
      );
      localStorage.setItem("user_id", response.user_id!);
      localStorage.setItem("access_token", response.access_token!);
      localStorage.setItem("refresh_token", response.refresh_token!);
      navigate("/home");
      console.log('State after dispatch:', store.getState().auth);
    },
    onError(error: any) {
      toast.error(`Login failed: ${error || "Unknown error"}`);
    },
  });
};
