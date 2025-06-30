import axios from "axios";
import store from "@redux/store";

export const REFRESH_TOKEN = import.meta.env.VITE_REFRESH_TOKEN;
export const API_HOST = import.meta.env.VITE_API_HOST;

const http = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

const httpAuth = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_HOST,
});

httpAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `Basic ${import.meta.env.VITE_CLIENT_KEY}`;
  return config;
});

http.interceptors.request.use((config) => {
  const {
    auth: { accessToken = "" },
  } = store.getState();
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export { http, httpAuth };
