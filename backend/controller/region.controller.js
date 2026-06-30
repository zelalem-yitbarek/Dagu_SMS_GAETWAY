import Region from "../models/region.model.js";
import ApiError from "../utils/api-error.js";

export const createRegion = async (req, res, next) => {
  try {
    const { name, code, status } = req.body;

    const existingRegion = await Region.findOne({
      $or: [{ name }, { code }],
    });

    if (existingRegion) {
      return next(
        new ApiError(
          "Region with the same name or code already exists",
          409
        )
      );
    }

    const region = await Region.create({
      name,
      code: code.toUpperCase(),
      status,
    });

    res.status(201).json({
      success: true,
      message: "Region created successfully",
      data: region,
    });
  } catch (error) {
    next(error);
  }
};