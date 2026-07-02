import City from "../models/city.model.js";
import Region from "../models/region.model.js";
import ApiError from "../utils/api-error.js";

// Create City
export const createCity = async (req, res, next) => {
  try {
    const { name, region } = req.body;

    // Check if the region exists
    const existingRegion = await Region.findById(region);

    if (!existingRegion) {
      return next(new ApiError("Region not found", 404));
    }

    // Check if city already exists
    const existingCity = await City.findOne({ name });

    if (existingCity) {
      return next(
        new ApiError("City with the same name already exists", 409)
      );
    }

    const city = await City.create({
      name,
      region,
    });

    res.status(201).json({
      success: true,
      message: "City created successfully",
      data: city,
    });
  } catch (error) {
    next(error);
  }
};


export const getCities = async (req, res, next) => {
  try {
    const cities = await City.find()
      .populate("region", "name code")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Cities fetched successfully",
      data: cities,
    });
  } catch (error) {
    next(error);
  }
};

// Get City By ID
export const getCityById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const city = await City.findById(id).populate("region", "name code");

    if (!city) {
      return next(new ApiError("City not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "City fetched successfully",
      data: city,
    });
  } catch (error) {
    next(error);
  }
};