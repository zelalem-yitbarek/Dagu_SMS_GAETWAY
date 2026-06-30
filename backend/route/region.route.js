import express from "express";
import { createRegion } from "../controllers/region.controller.js";
import { createRegionSchema } from "../validators/region.validator.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = express.Router();

router.post(
  "/",
  validate(createRegionSchema),
  createRegion
);

export default router;