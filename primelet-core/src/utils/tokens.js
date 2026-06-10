//JWT/crypto tokens utility functions
import crypto from "crypto";
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

export const signAccessToken = (userId) => {
  return jwt.sign({ sub: userId }, secret, { expiresIn: "1h" });
};

export const signRefreshToken = (userId) => {
  return jwt.sign({ sub: userId }, secret, { expiresIn: "7d" });
};

export const generateVerificationToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  return { token, expiresAt };
};
