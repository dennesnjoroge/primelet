//JWT tokens utility functions
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

export const signAccessToken = (userId) => {
  return jwt.sign({ sub: userId }, secret, { expiresIn: "1h" });
};

export const signRefreshToken = (userId) => {
  return jwt.sign({ sub: userId }, secret, { expiresIn: "7d" });
};
