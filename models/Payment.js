import mongoose from "mongoose";
import { fromJSON } from "postcss";
const {Schema,model}=mongoose;

const Paymentschema=new Schema({
    
    name:{type:String},
    to_user:{type:String},
    oid:{type:String},
    message:{type:String},
    amount:{type:Number},
    from_user:{type:String},
    createdAt:{ type: Date, default:Date.now },
    updatedAt:{ type: Date, default:Date.now },
    done:{type:Boolean,default:false}
})

export default mongoose.models.Payment || model("Payment",Paymentschema);