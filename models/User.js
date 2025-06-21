import mongoose from "mongoose";
const {Schema,model}=mongoose;

const Userschema=new Schema({
    name:{type:String},
    email:{type:String,required:true},
    username:{type:String,required:true},
    coverpic:{type:String},
    profilepic:{type:String},
    id:{type:String},
    secret:{type:String},
    createdAt:{ type: Date, default:Date.now },
    updatedAt:{ type: Date, default:Date.now },
})


export default mongoose.models.User || model("User",Userschema);