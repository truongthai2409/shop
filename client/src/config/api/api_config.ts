import axios, {
  AxiosError,
  AxiosResponse,
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
  

  let isRefreshing = false;
  let failedQueue: any[] = [];

  const processQueue = (error: AxiosError | null, token: string | null = null) => {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });

    failedQueue = [];
  };
  

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Nếu có dữ liệu trong response, trả về dữ liệu đó
      return response.data ? response.data : response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
  
      // Nếu lỗi là 401 và chưa retry
      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          // Nếu đang refresh token, xếp hàng chờ
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return instance(originalRequest);
            })
            .catch((err) => {
              window.location.href = '/login'
              return Promise.reject(err);
            });
        }
  
        originalRequest._retry = true;
        isRefreshing = true;
  
        try {
          // Refresh token
          const refreshToken = localStorage.getItem("refresh_token");
          try {
            const response = await instance.post("/auth/refresh_token", { refresh_token: refreshToken });
            const newAccessToken = response.data.access_token;
            localStorage.setItem("access_token", newAccessToken);
  
            instance.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
            processQueue(null, newAccessToken);
  
            return instance(originalRequest);
          } catch (refreshError: any) {
            // Ép kiểu refreshError thành AxiosError
            if (refreshError.isAxiosError) {
              console.error("Refresh token error:", refreshError);
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              processQueue(refreshError, null);
              return Promise.reject(refreshError);
            }
            // Nếu không phải lỗi Axios, xử lý như lỗi chung
            console.error("Unexpected error during token refresh:", refreshError);
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            processQueue(refreshError, null);
            window.location.href = '/login'
            

            return Promise.reject(refreshError);
          }
        } catch (err) {
          processQueue(error, null);
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }else if (error.response?.status === 403) {
        return Promise.reject('Invalid credentials, please check your username and password.');
      }

      const errorMessage = error.response || error.message || "An error occurred";    
      return Promise.reject(errorMessage)
    }
  );

  return instance;
};

export default http;
