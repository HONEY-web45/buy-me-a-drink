"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { click } from "@/actions/useractions";
import connectDb from "@/db/connectDB";
import { notFound, useRouter } from "next/navigation";
import Head from "next/head";

export default function Home() {
  const [name, setname] = useState("")
  const router=useRouter()
  const change= (e) => { 
    setname(e.target.value)
  }
  const Click= async ()=>{
  const a= await click(name)
  if(a){
    router.push(`/${a.username}`)
  }
   else{
    router.push(`/${name}`)
   }
   
}
  
  return (
    
    <div className="text-white  ">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className=" flex flex-col items-center justify-center h-screen gap-3 mx-10 sm:gap-8">
     
<div className="flex  items-center justify-between sm:justify-center ">
<span className="bg-gradient-to-b from-white text-2xl sm:text-6xl sm:ml-2  to-gray-400 bg-clip-text font-bold text-transparent text-center ">Buy Me A Drink </span>
      {/* <p className="text-6xl  font-bold">Buy Me A Drink 
      </p> */}
      <span><img src="tea.gif" alt=""  className="sm:w-[80px] mb-3 sm:mb-0 rounded-full w-[60px]"/></span>
</div>
      <p className="sm:text-lg text-base text-center font-bold">A Crowdfunding platform for creaters. Get funded by your fans and followers. Start Now!</p>
      


      <div className="flex my-2">
      <Link href="/login">
      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button> </Link>
      <Link href="/about">
      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button> </Link>
      </div>
<div className="flex items-center gap-4">
  <input type="text" value={name} onChange={(e)=>change(e)} className="h-8 sm:h-10 w-32 pl-2 sm:w-40 bg-slate-600 rounded-lg" />
  <button className='text-white   bg-gradient-to-br  from-black  to-slate-700 hover:bg-gradient-to-bl  px-3 py-1 sm:py-2 rounded-lg' onClick={()=>Click()}>
  <lord-icon
  src="https://cdn.lordicon.com/fkdzyfle.json"
  trigger="hover"
  style={{ "width": '25px', "height": '25px',"PaddingBottom":"2px" }}
  colors="primary:white,secondary:#fbbf24" >
</lord-icon>
</button>
</div>
      </section>
   <div className="h-[4px] bg-zinc-800 w-full "></div>
      <section className="min-h-screen  py-16">
        <div className="space-y-14 mx-10">

<p className="text-2xl font-bold text-center">Your fans can Buy  you a Drink</p>
<div className="flex sm:flex-row flex-col sm:gap-4 gap-8 justify-evenly">
  <div className="flex flex-col items-center gap-4 ">
    <img src="man1.gif" width={88} className="rounded-full"  alt="" />
    <p className="font-bold">Fund Yourself</p>
    <p className="text-center">your fans are available to help you</p>
  </div>
  <div className="flex flex-col items-center gap-4">
    <img src="dollar.gif" width={88} className="rounded-full" alt="" />
    <p className="font-bold">Fund Yourself</p>
    <p className="text-center"> your fans are available to help you</p>
  </div>
  <div className="flex flex-col items-center gap-4 ">
    <img src="group.gif" width={88} className="rounded-full" alt="" />
    <p className="font-bold ">Fans want to help</p>
    <p className="text-center">your fans are available to help you</p>
  </div>
</div>
        </div>
   <div className="h-[4px] bg-zinc-800 mt-14 w-full"></div>
        <div className="py-16 container px-10 mx-auto">
          <p className="text-2xl font-bold text-center">Learn More About Us
          </p>
          <div className="flex flex-col gap-10 py-10 sm:py-20  text-center">
            <p>At Buy Me A Drink, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive.</p>
            <p>Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you're a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, Buy Me A Drink is here to help you achieve your goals.</p>
            <p>We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and foster a culture of creativity and innovation.</p>
          </div>
        </div>
      </section>

      </div>
  );
}
