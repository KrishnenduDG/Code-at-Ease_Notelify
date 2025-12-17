import UserRepository from "../repository/user.js";
import { generateToken } from "../utils/jwt.js";
import {
  comparePasswords,
  generateHashedPassword,
  validateNewPassword,
} from "../utils/password.js";

class AuthController {
  static handleSignup = async (req, res) => {
    // Fetching the Request Body
    const { email, password } = req.body;

    // Validation
    // Body Schema Validation
    if (!email) {
      res.status(400).json({ status: false, msg: "Email not provided" });
      return;
    }

    if (!password) {
      res.status(400).json({ status: false, msg: "Password not provided" });
      return;
    }

    if (!validateNewPassword(password)) {
      res.status(400).json({
        status: false,
        msg: "Password does not meet the requirements",
      });

      return;
    }

    // Finding whether that user already exists
    const targetUser = await UserRepository.findUserByEmail(email);
    if (targetUser) {
      res.status(409).json({
        status: false,
        msg: "User with same email already exists",
      });
      return;
    }

    // Creating a new User
    await UserRepository.createUser(
      email,
      await generateHashedPassword(password)
    );

    res.status(201).json({ status: true, msg: "Account created successfully" });
  };

  static handleLogin = async (req, res) => {
    const { email, password } = req.body;

    // Body Schema Validation
    if (!email) {
      res.status(400).json({ status: false, msg: "Email not provided" });
      return;
    }

    if (!password) {
      res.status(400).json({ status: false, msg: "Password not provided" });
      return;
    }

    // Finding the user
    const targetUser = await UserRepository.findUserByEmail(email);
    if (!targetUser) {
      res.status(404).json({
        status: false,
        msg: "User does not exist",
      });
      return;
    }

    // Checking the password
    if (!(await comparePasswords(password, targetUser.password))) {
      res.status(401).json({
        status: false,
        msg: "Invalid Credentials",
      });
      return;
    }

    res.status(200).json({
      status: true,
      msg: "Login successful",
      token: generateToken({ id: targetUser.id }),
    });
  };
}

export default AuthController;
