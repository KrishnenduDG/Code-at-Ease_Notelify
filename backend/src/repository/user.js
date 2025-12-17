import { prisma } from "../utils/prisma.js";

class UserRepository {
  static findUserByEmail = (email) =>
    prisma.user.findFirst({ where: { email } });

  static createUser = (email, password) =>
    prisma.user.create({ data: { email, password } });
}

export default UserRepository;
