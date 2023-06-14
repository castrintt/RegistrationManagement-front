import axios from "axios";
import { devEnvironment } from "../environments/dev";
// import { prodEnvironment } from "../environments/prod";
import { decryptData } from "../utils/crypto";

const getEnvironmentUrl = () => {
  return devEnvironment.baseUrl;
  // return prodEnvironment.baseUrl;
};

const getTokenLocalStorage = (): string => {
  const userLocalInfoEncrypted = localStorage.getItem("client");
  if (userLocalInfoEncrypted) {
    return `Bearer ${decryptData(userLocalInfoEncrypted)["token"]}`;
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
