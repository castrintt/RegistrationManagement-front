/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from "crypto";
import { devEnvironment } from "../environments/dev";
// import { prodEnvironment } from "../environments/prod";

const algorithm = "aes-256-cbc";
const secretKey = devEnvironment.encryptSecretKey;

const encryptData = (data: any): string => {
  const textEncoder = new TextEncoder();
  const text = JSON.stringify(data);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encodedText = textEncoder.encode(text);
  const encrypted = Buffer.concat([cipher.update(encodedText), cipher.final()]);

  const encryptedData = `${iv.toString("hex")}:${encrypted.toString("hex")}`;
  return encryptedData;
};

const decryptData = (encryptedData: string): any => {
  const parts = encryptedData.split(":");
  if (parts.length !== 2) {
    throw new Error("Invalid encrypted data format");
  }
  const textDecoder = new TextDecoder();
  const ivHex = parts[0];
  const encryptedTextHex = parts[1];

  const iv = Buffer.from(ivHex, "hex");
  const encryptedText = Buffer.from(encryptedTextHex, "hex");

  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  const decrypted = Buffer.concat([
    decipher.update(encryptedText),
    decipher.final(),
  ]);

  const decodedText = textDecoder.decode(decrypted);
  const data = JSON.parse(decodedText);
  return data;
};

export { encryptData, decryptData };
