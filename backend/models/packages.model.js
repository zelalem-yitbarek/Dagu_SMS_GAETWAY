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
    }
})