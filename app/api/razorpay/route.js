import { NextRequest, NextResponse } from "next/server";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDb from "@/db/connectDB";
import User from "@/models/User";



export  const  POST=async(req,res)=> {
   
  await connectDb()
  let body = await req.formData()
  body = Object.fromEntries(body)

  
//   check if razorpay order id is preseent on the server
let p= await Payment.findOne({oid:body.razorpay_order_id})
if(!p){
    return NextResponse.json("Order Id not found")
}

let user=await User.findOne({username:p.to_user})
let secret=user.secret

let x=validatePaymentVerification({
    "payment_id": body.razorpay_payment_id,
    "order_id": body.razorpay_order_id},
     body.razorpay_signature,
  secret)

  if (x) {
    // update the payment status
    const updatedpayment=await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:true},{new:true})
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedpayment.to_user}?paymentdone=true`)
  }
  else{
    return NextResponse.json({success:false,message:"Payment verification failed"})
  }
}