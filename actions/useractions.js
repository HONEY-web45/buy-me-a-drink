"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDB"
import User from "@/models/User"
import { use } from "react"

export const initiate=async(amount,to_username,paymentform)=>{
await connectDb()
let user=await User.findOne({username:to_username})
var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret:process.env.KEY_SECRET });

let options={
    amount:Number.parseInt(amount),
    currency:"INR"
}
let x=await instance.orders.create(options)
console.log(x)
//create a payment object which shows a pending payment in the database
await Payment.create({oid:x.id,amount:amount/100,to_user:to_username,name:paymentform.name,message:paymentform.message})
return x
}



export const fetchuser=async(username) => { 
    await connectDb()
    let u=await User.findOne({username:username})
    let user= JSON.parse(JSON.stringify(u))
    return user
   
    
 }
export const fetchpayment=async(username) => { 
    await connectDb()
   
    let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean()
    let q= JSON.parse(JSON.stringify(p))
    return q
 }

 export const updateprofile=async(name,username,newdata)=>{
    await connectDb()
    let ndata = JSON.parse(JSON.stringify(newdata))

    // If the username is being updated, check if username is available
    if (username !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
   
        if (u ) {
            return { error: "Username already exists.Please use different Username" }
        } 
        

     let b=   await User.updateOne({email: ndata.email}, ndata)
        // Now update all the usernames in the Payments table 
        await Payment.updateMany({to_user: username}, {to_user: ndata.username})
     return b   
    }
 
    else if (name !== ndata.name) {
      let u = await User.findOne({name: ndata.name })
 
      if (u ) {
          return { error: "Name already exists.Please use a different Name" }
      } 
      

   let b=   await User.updateOne({email: ndata.email}, ndata)
      // Now update all the usernames in the Payments table 
      
   return b   
  }
    
    else{
       

        
     let c=   await User.updateOne({email: ndata.email}, ndata)
     return c
    }
     
    }

 export const click= async (name)=>{
    await connectDb()
    const u=await User.findOne({name:name})
    const user= JSON.parse(JSON.stringify(u))
   
     return user
    
    } 