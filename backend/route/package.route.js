import express from 'express';
import { createPackage } from '../controller/package.controller.js';
import { createPackageSchema } from '../validator/packages.validator.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

router.post(
    '/',validate(createPackageSchema),
    createPackage
);

export default router;