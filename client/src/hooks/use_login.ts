import { useMutation } from "@tanstack/react-query";
import { loginSevice } from "../config/services/login_service";
import { LoginData, LoginResponse } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: LoginData) => {
      return loginSevice(data);
    },
    onSuccess(response: LoginResponse) {
      localStorage.setItem("user_id", response.user_id!);
      localStorage.setItem("access_token", response.access_token!);
      localStorage.setItem("refresh_token", response.refresh_token!);
      navigate("/home");
    },
    onError(error: any) {
      toast.error(`Login failed: ${error || "Unknown error"}`);
    },
  });
};

