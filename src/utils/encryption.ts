import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "";

export interface RegistrationData {
  surname: string;
  otherNames: string;
  email: string;
  phoneNo: string;
  registrationType: string;
  registrationId: string;
}

export const encryptData = (data: RegistrationData): string => {
  try {
    const jsonString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
    return encodeURIComponent(encrypted);
  } catch (error) {
    console.error("Encryption error:", error);
    throw new Error("Failed to encrypt data");
  }
};

export const decryptData = (encryptedData: string): RegistrationData => {
  try {
    const decrypted = CryptoJS.AES.decrypt(
      decodeURIComponent(encryptedData),
      SECRET_KEY
    );
    const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Decryption error:", error);
    throw new Error("Failed to decrypt data");
  }
};
