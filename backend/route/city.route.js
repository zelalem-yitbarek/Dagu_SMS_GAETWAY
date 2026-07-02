import express from "express";
import { createCity } from "../controller/city.controller.js";
import { getCities, getCityById } from "../controller/city.controller.js";
import { createCitySchema } from "../validator/city.validator.js";
import { validate } from "../middleware/validate.middleware.js";

const router = express.Router();

router.post("/",
  validate(createCitySchema),
  createCity
);

router.get("/all",getCities);
router.get("/single/:id",getCityById);

export default router;