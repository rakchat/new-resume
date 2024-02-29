import axios, { AxiosError, AxiosRequestHeaders } from "axios";
// import { notification } from "antd";
// import { systemPath } from "./menuSystem";

export const AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY!;
export const USER_KEY = process.env.NEXT_PUBLIC_USER_KEY!;

const api = axios.create({
  baseURL: "/api/v1.0",
});

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem(AUTH_KEY);
  if (token) {
    (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res: any) => {
    return res;
  },
  (err: AxiosError<any, any>) => {
    const { response } = err;
    if (response?.status === 401) {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(USER_KEY);
      // if (window.location.pathname !== systemPath.login.key) {
      //   setTimeout(() => {
      //     window.location.href = systemPath.login.key;
      //   }, 1000);
      // }
    } else {
      if (
        response?.data.message === "password is not correct" &&
        response?.status === 400
      ) {
        return;
      }
      if (
        (response?.data.message === "Email has been used" ||
          response?.data.message === "Phone has been used") &&
        response?.status === 400
      ) {
        return Promise.reject(err.response);
      }
      if (response?.data.slug === "Error for Upload") {
        return Promise.reject(err.response);
      }

      openNotificationWithIcon(
        "error",
        response?.status as number,
        response?.statusText as string
      );
    }
    return Promise.reject(err.response);
  }
);

const openNotificationWithIcon = (
  type: "error" | "info",
  message: string | number,
  description: string
) => {
  alert(message);
  // notification[type]({
  //   message,
  //   description: description ? description : "Something went wrong!",
  // });
};

export default api;
