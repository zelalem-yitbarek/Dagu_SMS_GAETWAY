import express from "express";
import { createRegion } from "../controller/region.controller.js";
import { createRegionSchema } from "../validator/region.validator.js";
import { validate } from "../middleware/validate.middleware.js";

const router = express.Router();

router.post(
  "/",
  validate(createRegionSchema),
  createRegion
);

export default router;