import { appError } from "../../utils/error.js";
import { registrationService } from "./auth.service.js";
export const testController = (req, res) => {
  return res.status(200).json({ status: "success" });
};

export const login = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    // registrationData contains firstName, lastName, emailAddress, phoneNumber & password
    const registrationData = req.body;

    await registrationService(registrationData);

    return res
      .status(200)
      .json({ status: "success", message: "Account created successfully" });
  } catch (error) {
    next(error);
  }
};
