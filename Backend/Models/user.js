import mongoose from "mongoose";
const userSchema=new mongoose.Schema(
    {   _id:Number,
        firstname:String,
        lastname:String,
        isAdmin:Boolean
    })
   
    const UserModel=mongoose.model("users",userSchema)
    export default UserModel;