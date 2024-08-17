import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { RegisterData, LoginResponse } from "../types";
import { registerSevice } from "../config/services/register_service";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: RegisterData) => {
      return registerSevice(data);
    },
    onSuccess(response: LoginResponse) {
      localStorage.setItem("user_id", response.user_id!);
      localStorage.setItem("access_token", response.access_token!);
      localStorage.setItem("refresh_token", response.refresh_token!);
      toast.success("Register Success !");
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    },
    onError(error: any) {
      if (error.data.message) {
        toast.error(`Login failed: ${error.data.message || "Unknown error"}`);
      } else {
        toast.error("Login failed");
      }
    },
  });
};
