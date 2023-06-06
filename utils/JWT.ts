/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from "jsonwebtoken";

const secretKey = "b-!&<]TWpoAs6%ZZphX>53T8DFHzRo";

const encryptData = (dataToEncode: any): string => {
  const encodedData = jwt.sign(dataToEncode, secretKey);
  return encodedData;
};

const decryptData = (encodedData: string): any => {
  try {
    const decodedData = jwt.verify(encodedData, secretKey);
    return decodedData;
  } catch (error) {
    console.log("Erro ao descriptografar os dados:", error);
    return null;
  }
};

export { encryptData, decryptData };
