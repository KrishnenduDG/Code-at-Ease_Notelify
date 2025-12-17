import { compare, genSalt, hash } from "bcryptjs";
import { MIN_PASSWORD_LENGTH, PASSWORD_SALT_ROUNDS } from "../constants.js";

export const generateHashedPassword = async (
  password,
  saltRounds = PASSWORD_SALT_ROUNDS
) => await hash(password, await genSalt(saltRounds));

export const comparePasswords = async (password, hashedPassword) =>
  await compare(password, hashedPassword);

const validateNewPassword = (password) => {
  return password.length >= MIN_PASSWORD_LENGTH;
};

export { validateNewPassword };
