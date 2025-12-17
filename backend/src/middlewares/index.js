import { decodeToken } from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {
  const authToken = req.headers["x-auth-token"];

  if (!authToken) {
    res.status(401).json({ status: false, msg: "Auth token not found" });
    return;
  }

  const decodedTokenResult = decodeToken(authToken);
  if (!decodedTokenResult.status) {
    res.status(401).json({ status: false, msg: "Invalid Auth Token" });
    return;
  }

  res.locals.uid = decodedTokenResult.data.id;

  next();
};

export { authMiddleware };
