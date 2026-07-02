import Package from '../models/packages.model.js';
import ApiError from '../utils/api-error.js';

export const createPackage = async (req,res,next)=>{
    try{
        const {title,price,description,status} = req.body;

        const existingPackage = await Package.findOne({
            $or:[{title},{price}],
        });

        if(existingPackage){
            return next(
                new ApiError("Package with the same title or price already exists",409)
            );
        }
        const packages = await Package.create({
            title,
            price,
            description,
            status
        });
        res.status(201).json({success:true,message:"Package created successfully",data:packages});
    } catch (error) {
        next(error);
    }
}