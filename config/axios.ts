import axios from "axios";
import { decryptData } from "../utils/JWT";

const getEnvironmentUrl = (): "production" | "development" => {
  if (process.env.NODE_ENV === "production") {
    return import.meta.env.VITE_API_URL_PROD;
  }
  return import.meta.env.VITE_API_URL_DEV;
};

const getTokenLocalStorage = (): string => {
  const userLocalInfoEncrypted = localStorage.getItem("user");
  if (userLocalInfoEncrypted) {
    return `Bearer ${decryptData(JSON.parse(userLocalInfoEncrypted))}`;
  }
  return "Bearer";
};

const httpPublic = axios.create({
  baseURL: getEnvironmentUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

const httpPrivate = axios.create({
  baseURL: getEnvironmentUrl(),
  headers: {
    "Content-Type": "application/json",
    Authorization: getTokenLocalStorage(),
  },
  withCredentials: true,
});

export { httpPublic, httpPrivate };
