import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"Fullname is required"],
        trim:true,
    },
    email:{
        type:string,
        required:[true,"Email is required"],
        unique:true,
        trim:true,
    },
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:true,
        trim:true,
    },
    phoneNumber:{
        type:String,
        required:[true,"Phone number is required"],
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        trim:true,
        length:[6,"Password must be at least 6 characters long"]
    },
    confirmPassword:{
        type:String,
        required:[true,"Confirm password is required"],
        trim:true,
        length:[6,"Confirm password must be at least 6 characters long"]
    },
    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    avatar: {
      type: String,
      default: "",
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active",
        trim:true
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema);
export default User;