import { Router } from "express";
import authController from "./auth.controller.js";
import validationMiddleware from "../../middlewares/validation.middleware.js";
import validationSchema from "../../schemas/validation.schema.js";

const router = Router();

router.post(
  "/login",
  validationMiddleware.login(validationSchema.login),
  authController.login,
);
router.post(
  "/register",
  validationMiddleware.register(validationSchema.signup),
  authController.register,
);

export default router;
