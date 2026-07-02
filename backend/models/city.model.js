import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    region:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Region",
        required:true
    }
},{timestamps:true});
const City = mongoose.model("city",citySchema);
export default City;