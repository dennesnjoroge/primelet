import { ZodError } from "zod";
import utils from "../utils/utils.js";

const login = (loginSchema) => {
  return (req, res, next) => {
    try {
      const validLoginData = loginSchema.parse(req.body);
      req.body = validLoginData;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.issues.reduce((acc, issue) => {
          const field = issue.path.join(".");
          acc[field] = issue.message;
          return acc;
        }, {});

        return next(utils.appError("Validation failed", 400, errors));
      }

      next(error);
    }
  };
};

const register = (registrationSchema) => {
  return (req, res, next) => {
    try {
      const validRegistrationData = registrationSchema.parse(req.body);
      req.body = validRegistrationData;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.issues.reduce((acc, issue) => {
          const field = issue.path.join(".");
          acc[field] = issue.message;
          return acc;
        }, {});

        return next(utils.appError("Validation failed", 400, errors));
      }

      next(error);
    }
  };
};

const verifyEmail = (verifyEmailSchema) => {
  return (req, res, next) => {
    try {
      const validVerificationToken = verifyEmailSchema.parse(req.body);
      req.body = validVerificationToken;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.issues.reduce((acc, issue) => {
          const field = issue.path.join(".");
          acc[field] = issue.message;
          return acc;
        }, {});

        return next(utils.appError("Validation failed", 400, errors));
      }

      next(error);
    }
  };
};

export default { login, register, verifyEmail };
