import { Router } from "express";
import { testController } from "./auth.controller.js";
import { login, register } from "./auth.controller.js";
import {
  validateLoginData,
  validateRegData,
} from "../../middlewares/validation.middleware.js";
import { loginSchema, signupSchema } from "../../schemas/validation.schema.js";
const router = Router();

router.get("/", testController);
router.post("/login", validateLoginData(loginSchema), login);
router.post("/register", validateRegData(signupSchema), register);

export default router;
