import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";

const http = (URL?: string) => {
  const baseURL = URL || (import.meta.env.VITE_API_BE as string);
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    } as RawAxiosRequestHeaders,
    
  });

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => config
  );

  instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response;
    }

    return response;
  },
  (error: AxiosError) => {
    throw error;
  }
);
  return instance;
};

export default http;
