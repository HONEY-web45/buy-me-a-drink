"use client"
import React, { useEffect, useState } from 'react'
import Razorpay from 'razorpay'
import Script from 'next/script'
import { fetchpayment, fetchuser, initiate } from '@/actions/useractions'
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect, useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation'
import { Bounce } from 'react-toastify';


const Paymentpage = ({user_name}) => {
const { data: session,status,update } = useSession()
const [paymentform, setPaymentform] = useState({name:"",message:"",amount:""})

const [currentUser, setcurrentUser] = useState({})
const [payments, setPayments] = useState([])
const search=useSearchParams()
const router=useRouter()


const getData = async () => {
  let u = await fetchuser(user_name)
  if (u) {
    
    setcurrentUser(u)
  }

 
  let dbpayments = await fetchpayment(user_name)
  
   
   
if (dbpayments) {
    setPayments(dbpayments) 
}

  
}


 useEffect(() => {
  
    if (currentUser!=null ) {
     
      getData()
      
    }
  },[])
    
    useEffect(() => {
      if (search.get('paymentdone')=="true" ) {
        toast(' Thanks for payment', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
          });
          router.push(`/${user_name}`)
      }
    
      
    }, [])
    
   useEffect(() => {
    toast(" Payment buttons are disabled.If you want to do payments,then you'll have to enter your name,message and amount first", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
      });
      
   
    
   }, [])
   
    

 




const handle=(e)=>{
    setPaymentform({...paymentform,[e.target.name]:e.target.value})
}

    const pay=async(amount)=>{
        let a=await initiate(amount,user_name,paymentform)
        let orderid=a.id
    var options = {
    "key_id": currentUser.id, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Buy Me A Drink", //your business name
    "deScription": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id":orderid, //This is a sample Order ID. Pass the id obtained in the response of Step 1
    "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Nitik Choudhary", //your customer's name
        "email": "nitik23212@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new window.Razorpay(options);

rzp1.open()

}
  return (
    
    <div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
      
<Script src="https://checkout.razorpay.com/v1/checkout.js" defer></Script>
{/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
<script type="text/javascript" src="https://checkout.razorpay.com/v1/razorpay.js" defer></script>




<div className='relative h-[55vh] flex items-end justify-center '>
  <img src={currentUser.coverpic} alt="" className='absolute top-0 w-full h-[50vh] z-0' />
  <div className='mt-10' >
  <img src={currentUser.profilepic} alt="" className='z-10 rounded-full w-28 h-24 relative ' />
  </div>
</div>

      
      <div className='flex text-white flex-col justify-center gap-3  mb-4 items-center'>

      <div className='  '>
        <h1 className='  text-3xl font-medium'>{currentUser.name}</h1>
      </div>
      <p className='text-base text-slate-400' >Let's help {currentUser.name} Buy a Drink</p>
      <p className='text-base text-slate-400'>{payments.length}  payments. ₹ {payments.reduce((a,b)=>a+b.amount,0)} raised</p>
      </div>

      
<div className="pay   gap-5 px-[10vw]   flex flex-col md:flex-row   pb-10 ">
  <div className='bg-gradient-to-br from-black to-slate-600  w-full px-2  sm:px-10 rounded-xl overflow-y-scroll h-[27rem]  relative text-white'>
  <h1 className='text-xl font-bold my-4  '>Top 10 Supporters</h1>
<ul  className=' ml-4 my-6 '>
  {payments.length==0 && <p className='text-center text-xl flex items-center justify-center text-slate-400'>No Payments yet</p>}
  {payments.length>0 && payments.map((item,index)=>{
return(
  <span key={item.oid}>

 
  <li className='flex gap-5  items-center my-6'><img src="user.gif" className='rounded-full' width={40} alt="" />
  <div className=' tracking-wide font-serif' >
     <span className='font-bold '>{item.name}   </span>
     <span className='text-gray-400'>sent  </span>
     <span className='font-bold '>₹{item.amount}</span>
     <span className='text-gray-400'> with a message </span>
     <span className='font-bold '>"{item.message}"</span>
  </div>
  </li>
  </span>
)
  })}
  </ul>

  </div>
  <div className='bg-gradient-to-bl from-black via-slate-700  to-slate-900 w-full px-10 md:px-6 lg:px-10 py-3  rounded-xl text-white'>
<h1 className='text-xl font-bold my-3'>Make a Payment</h1>

<div className='flex flex-col gap-3 my-6'>
  <input type="text" required={true} className='bg-gradient-to-br from-black via-slate-700  to-slate-900  rounded-lg placeholder:text-slate-200 p-3' name="name" placeholder='Enter Name' id="" onChange={(e)=>handle(e)} value={paymentform.name} />
  <input type="text" value={paymentform.message} required name='message' className='bg-gradient-to-br from-black via-slate-700   to-slate-900  placeholder:text-slate-200  rounded-lg  p-3' onChange={(e)=>handle(e)} placeholder='Enter Message' id="" />
  <input type="number"  required onChange={(e)=>handle(e)}  name="amount" value={paymentform.amount} id="amount" className='bg-gradient-to-br placeholder:text-slate-200 from-black via-slate-700  to-slate-900  rounded-lg  p-3' placeholder='Enter Amount (in $)'/>
  
  <button  className="text-white   disabled:from-gray-500 disabled:to-gray-600 bg-gradient-to-br from-black to-slate-600  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 text-lg  py-2.5 text-center  mb-2 " onClick={()=>pay((paymentform.amount)*100)} disabled={paymentform.name.length<3 || paymentform.amount<1 || paymentform.message.length<2}   >Pay</button>
</div>
  <div className=' flex flex-col gap-3  md:flex-row'>
    <button className=' disabled:to-gray-600 disabled:from-gray-600 from-black via-slate-700  to-slate-900 bg-gradient-to-br px-2 lg:px-5 rounded-xl py-3' onClick={()=>pay(1000)} disabled={paymentform.name.length<3  || paymentform.message.length<2}>Pay ₹10</button>
    <button className='from-black disabled:to-gray-600 disabled:from-gray-600 via-slate-700  to-slate-900 bg-gradient-to-br px-2 lg:px-5 rounded-xl py-3' onClick={()=>pay(2000)} disabled={paymentform.name.length<3  || paymentform.message.length<2}>Pay ₹20</button>
    <button className='from-black disabled:to-gray-600 disabled:from-gray-600 via-slate-700  to-slate-900 bg-gradient-to-br px-2 lg:px-5 rounded-xl py-3' onClick={()=>pay(3000)} disabled={paymentform.name.length<3  || paymentform.message.length<2}>Pay ₹30</button>
  </div>
  </div>

</div>
    </div>
  )
}

export default Paymentpage

