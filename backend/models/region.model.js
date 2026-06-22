import mongoose from "mongoose";
import express from "express";

const regionSchema=new mongoose.Schema({
    name:{
        required:true,
        trim:true,
        unique:true
    },
    code:{
        required:true,
        trim:true,
        length:3,
        unique:true
    },
    status:{
        type:String,
        enum:["active","inactive","blocked"],
        default:"active"
    }
    },{timestamps:true})

    const regions=mongoose.model("region",regionSchema);
    export default regions;