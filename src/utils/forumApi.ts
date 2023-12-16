import axios from "axios";
import { _getHeader, _retrieveData } from "./token";

export const host = '192.168.0.101';

const forumApi = axios.create({
  baseURL: `http://${host}:3000`,
});

export async function getForumApi() {
  const token = await _retrieveData();
  forumApi.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return forumApi;
}


