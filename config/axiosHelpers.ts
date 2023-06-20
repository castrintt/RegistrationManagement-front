/* eslint-disable @typescript-eslint/no-explicit-any */
import { devEnvironment } from "../environments/dev";
// import { prodEnvironment } from "../environments/prod";
import { decryptData } from "../utils/crypto";
import { RefreshTokenRequest } from "../business/domain/entities/request/client/refreshToken/RefreshTokenRequest";

const getEnvironmentUrl = () => {
  return devEnvironment.baseUrl;
  // return prodEnvironment.baseUrl;
};

const localStorageAccessToken = (): RefreshTokenRequest => {
  const userLocalInfoEncrypted = localStorage.getItem("encryptClient") ?? null;
  if (userLocalInfoEncrypted) {
    const decrypt = decryptData(userLocalInfoEncrypted);
    return {
      accessToken: decrypt["accessToken"],
      refreshToken: decrypt["refreshToken"],
    };
  }
  return {
    accessToken: "",
    refreshToken: "",
  };
};

const localStorageBearerToken = (): string => {
  const userLocalInfoEncrypted = localStorage.getItem("encryptClient") ?? null;
  if (userLocalInfoEncrypted) {
    const decrypt = decryptData(userLocalInfoEncrypted)["accessToken"];
    return `Bearer ${decrypt}`;
  }
  return "Bearer";
};

const localStorageExpirationTime = () => {
  const userLocalInfoEncrypted = localStorage.getItem("encryptClient") ?? null;
  if (userLocalInfoEncrypted) {
    const decrypt = decryptData(userLocalInfoEncrypted)["expiry"];
    return decrypt;
  }
  return 0;
};

const localStorageLoginAttemptDate = () => {
  const userLocalInfoEncrypted = localStorage.getItem("encryptClient") ?? null;
  if (userLocalInfoEncrypted) {
    const decrypt = decryptData(userLocalInfoEncrypted)["loginAttempt"];
    return new Date(decrypt);
  }
  return new Date();
};

const getDifferenceBetweenADateAndNow = (loginAttemptTime: Date): number => {
  const now = new Date();
  const differenceInMinutes = Math.floor(
    (now.getTime() - loginAttemptTime.getTime()) / (1000 * 60)
  );
  return differenceInMinutes;
};

const conditionToValidateTimeThatUserIsLogged = () => {
  return (
    getDifferenceBetweenADateAndNow(localStorageLoginAttemptDate()) >= 0 &&
    getDifferenceBetweenADateAndNow(localStorageLoginAttemptDate()) <=
      localStorageExpirationTime()
  );
};

export {
  localStorageAccessToken,
  localStorageBearerToken,
  localStorageExpirationTime,
  localStorageLoginAttemptDate,
  getDifferenceBetweenADateAndNow,
  getEnvironmentUrl,
  conditionToValidateTimeThatUserIsLogged,
};
