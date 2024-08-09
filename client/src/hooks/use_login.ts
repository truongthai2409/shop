import { useMutation } from "@tanstack/react-query";
import { loginSevice } from "../config/services/login_service";
import { LoginData } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: LoginData) => {
      return loginSevice(data);
    },
    onSuccess(response) {
      localStorage.setItem("access_token", response.token)
      navigate("/home");
    },
    onError(error) {
      console.log(error);
      toast.error(`Login failed`);
      return error;
    },
  });
};
