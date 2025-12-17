import jwt from "jsonwebtoken";
import { JWT_TOKEN_EXPIRY } from "../constants.js";

export const generateToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: JWT_TOKEN_EXPIRY });

export const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { status: true, data: decoded };
  } catch (error) {
    return { status: false, data: null };
  }
};
