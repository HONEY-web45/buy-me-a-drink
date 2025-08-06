"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect, useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Navbar = () => {
let path=usePathname()
  const { data: session } = useSession()
  const [show, setshow] = useState(false)


  
  return (
    <nav className='text-white  bg-gray-900  flex sm:flex-row  flex-col  sm:justify-between py-2.5 px-2 sm:px-10 items-center '>
      
        <div className="logo text-xl font-bold ml-1 sm:ml-0 ">
            <Link href={"/"} className='cursor-pointer flex  items-center'>
          <span className='text-2xl text-[#2ceaa1]'>  Buy me a Drink!</span>
            <img src="tea.gif" className='h-14 pb-2 rounded-full ' alt="" />
            </Link>
        </div>
<div className='w-[70%] sm:w-auto  sm:space-x-6 flex gap-3   flex-col sm:block  relative'>
 



  {session && 
  <span className='sm:pl-2 relative w-full '>
<button id="dropdownDefaultButton" onClick={()=>setshow(!show)}   onBlur={()=>setTimeout(() => {setshow(false)}, 100)} data-dropdown-toggle="dropdown" className="text-white bg-gradient-to-br from-black  to-slate-700  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg     w-[98%]  sm:w-56 text-sm px-5 py-3   inline-flex items-center justify-around dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-slate-700 " type="button"> <span className='text-base'> {session?.user?.name}</span> <svg className="w-2.5 h-2.5 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

{/* <!-- Dropdown menu --> */}
<div id="dropdown" onMouseLeave={()=>setTimeout(() => {setshow(false)}, 500)} className={`"z-10 ${show?"block":"hidden"}   absolute left-2 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"`}>
    <ul className="py-2 text-sm text-white font-medium dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
       <Link href={`/dashboard`} className="block px-4 py-2  hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>

      <li>
        <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
      </li>
      
      <li>
        <Link href="/" prefetch={true} className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>{signOut({callbackUrl:"/login"})}}>Sign out</Link>
      </li>
    </ul>
</div>
</span>
}
  {session &&   <button type="button" className="text-white bg-gradient-to-br from-black  to-slate-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-slate-700 dark:focus:ring-slate-700 rounded-lg  px-5 py-2.5  text-center me-2 mb-2 font-bold" onClick={()=>{signOut({callbackUrl:"/login"}) 

  }}  >Log out </button> 
    }
 { !session &&  <Link href={"/login"} className=''>
<button type="button" className="text-white  bg-gradient-to-br w-full sm:w-auto from-black  to-slate-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-slate-700 dark:focus:ring-slate-700  rounded-lg  px-5 py-2.5 text-center me-2 mb-2 font-bold" >Login </button>
    </Link>}
    
</div>

    </nav>
  )
}

export default Navbar
