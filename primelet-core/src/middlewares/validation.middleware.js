import { ZodError } from "zod";
import { appError } from "../utils/error.js";

export const validateLoginData = (loginSchema) => {
  return (req, res, next) => {
    try {
      const { emailAddress, password } = req.body || {};

      if (!emailAddress) {
        throw appError("Email address is required", 400);
      }

      if (!password) {
        throw appError("Password cannot be empty", 400);
      }

      const validLoginData = loginSchema.parse(req.body);
      req.body = validLoginData;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return next(appError(error.issues[0].message, 400));
      }

      next(error);
    }
  };
};

export const validateRegData = (registrationSchema) => {
  return (req, res, next) => {
    try {
      const { firstName, lastName, emailAddress, phoneNumber, password } =
        req.body || {};

      if (!firstName) {
        throw appError("First name is required", 400);
      }

      if (!lastName) {
        throw appError("Last name is required", 400);
      }

      if (!emailAddress) {
        throw appError("Email address is required", 400);
      }

      if (!phoneNumber) {
        throw appError("Phone number is required", 400);
      }

      if (!password) {
        throw appError("Password cannot be empty!", 400);
      }
      const validRegistrationData = registrationSchema.parse(req.body);
      req.body = validRegistrationData;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return next(appError(error.issues[0].message, 400));
      }

      next(error);
    }
  };
};
