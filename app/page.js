"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { click } from "@/actions/useractions";
import connectDb from "@/db/connectDB";
import { notFound, useRouter } from "next/navigation";
import Head from "next/head";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)



export default function Home() {
  const [name, setname] = useState("")
  const router=useRouter()
  const change= (e) => { 
    setname(e.target.value)
  }
  const Click= async ()=>{
      console.log("Button clicked!");
  const a= await click(name)
  if(a){
    router.push(`/${a.username}`)
  }
   else{
    router.push(`/${name}`)
   }
   
}


useLayoutEffect(() => {
  gsap.to(".vis",{
    opacity:1
  })


}, [])




   useLayoutEffect(() => {
 let tl=gsap.timeline({
  scrollTrigger:{
    trigger:"#up",
start:"top 50%"
  }
 })

 
  tl.from(".a",{
    scale:0,
    rotate:360,
    autoAlpha:0,
    duration:1
  })

   tl.from(".b",{
    y:700,
    autoAlpha:0,
    duration:.4,
    smoothOrigin:true
   },"-=.2")
tl.from(".c",{
  x:-700,
  autoAlpha:0,
  duration:.6
   },"-=.1")
tl.from(".cc",{
  x:500,
  autoAlpha:0,
 
  duration:.6
},"-=0.6")
tl.from(".d",{
  y:500,
  autoAlpha:0,
 
  duration:.4
},"-=.2")
tl.from(".e",{
  y:500,
  autoAlpha:0,
 
  duration:.4
})
  }, [])

useLayoutEffect(() => {
  const tl=gsap.timeline({
    scrollTrigger:{
      trigger:".gs",
          toggleActions:"play none none reverse",

    }
  })

tl.from("#one",{
  x:-400,
  duration:.5,
  autoAlpha:0,
 

})
tl.from("#two",{
  x:-500,
  duration:.5,
  autoAlpha:0,


})
tl.from("#three",{
   y:100,
  duration:.5,
  autoAlpha:0,
  
})

tl.from("#four",{
  x:500,
  duration:.5,
  autoAlpha:0,
  // scrub:1,
})
}, [])

  return (
    
    <div className="text-white  vis  overflow-hidden">
       
      <section className=" flex flex-col items-center justify-center h-screen gap-3 mx-10 sm:gap-8 " id="up">
     
<div className="flex  items-center justify-between sm:justify-center a">
<span className="bg-gradient-to-b from-white text-2xl sm:text-6xl sm:ml-2  to-gray-400 bg-clip-text font-bold text-transparent text-center ">Buy Me A Drink </span>
      {/* <p className="text-6xl  font-bold">Buy Me A Drink 
      </p> */}
      <span><img src="tea.gif" alt=""  className="sm:w-[80px] mb-3 sm:mb-0 rounded-full w-[60px]"/></span>
</div>
      <p className=" lg:mx-48 break-words lg:text-base text-slate-300 text-sm text-center font-semibold b">A SIMPLE SUPPORT PLATFORM FOR CREATORS. FRIENDS AND FOLLOWERS CAN SEND SMALL TIPS — NO PRODUCTS, NO SUBSCRIPTIONS — JUST GRATITUDE AND SUPPORT.</p>
      


      <div className="flex my-2">
      <Link href="/login">
      <button type="button" className="c text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button> </Link>
      <Link href="/about">
      <button type="button" className="cc text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button> </Link>
      </div>
      <h1 className="text-lg sm:text-2xl font-bold text-center d"> Search for a User</h1>
<div className="flex items-center gap-4 d">
  <input type="text" value={name} onChange={(e)=>change(e)} className="h-8 sm:h-10 w-32 pl-2 sm:w-40 bg-slate-600/50 rounded-lg" />
  <button className='text-white   bg-gradient-to-br  from-black  to-slate-700 hover:bg-gradient-to-bl  px-3 py-1 sm:py-2 rounded-lg' onClick={()=>Click()}>
  <Image src="searchhh.svg" width={25} height={25} alt=""  className="invert"/> 
</button> 
</div>
      </section>
   <div className="h-[4px] bg-zinc-800 w-full "></div>
      <section className="min-h-[80vh]  py-16">
        <div className="space-y-14 mx-10 gs">

<p className="text-2xl font-bold text-center " id="one">Your fans can Buy  you a Drink</p>
<div className="flex sm:flex-row flex-col sm:gap-4 gap-8 justify-evenly">
  <div className="flex flex-col items-center gap-4 " id="two">
    <img src="man1.gif" width={88} className="rounded-full"  alt="" />
    <p className="font-bold">Fund Yourself</p>
    <p className="text-center">your fans are available to help you</p>
  </div>
  <div className="flex flex-col items-center gap-4" id="three">
    <img src="dollar.gif" width={88} className="rounded-full" alt="" />
    <p className="font-bold">Fund Yourself</p>
    <p className="text-center"> your fans are available to help you</p>
  </div>
  <div className="flex flex-col items-center gap-4 " id="four">
    <img src="group.gif" width={88} className="rounded-full" alt="" />
    <p className="font-bold ">Fans want to help</p>
    <p className="text-center">your fans are available to help you</p>
  </div>
</div>
        </div>
   
      </section>

      </div>
  );
}
