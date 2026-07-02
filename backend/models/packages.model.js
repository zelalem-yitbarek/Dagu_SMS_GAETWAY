import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
       enum:["active","inactive","blocked"],
       default:"active"
    }
},{timestamps:true});
const Packages = mongoose.model('packages',packageSchema);
export default Packages;