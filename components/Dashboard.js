"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect, useRouter } from 'next/navigation'
import { updateprofile,fetchuser } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';





const Dashboard = () => {
  const router=useRouter()
  
  const { data: session,status,update } = useSession()
  
  
  const [form, setform] = useState({name:"",email:"",username:"",profilepic:"",coverpic:"",id:"",
    secret:""})
    const [name, setname] = useState()
   
    

    
     

    

  useEffect(() => {
        // console.log(session)

        if (!session) {
            router.push('/login')
        }
        else {
            getdata()
        }
         toast.info(' If you want to see your page ,kindly click on  the button which shows your Username in right side top corner and then click on "Your Page"  ', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce
    })
    }, [])

const getdata=async()=>{
  let a = await fetchuser(session?.user?.name);
  console.log(a);
  
  if (a) {
  
    setform(a);
    if(a.name){
    setname(a.name)}
  }
}










const change=(e) => { 
  setform({...form,[e.target.name]:e.target.value})
}
const submit=async(e) => {
  if (form.name.length<1 && form.coverpic.length<1 && form.profilepic.length<1 && form.id.length<1 && form.secret.length<1) {
    toast.error("Please enter your full details", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });
  
    
  }
  else if (form.name.length<3) {
    toast.error("Please enter your name", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });}
  else if (form.username.length<5) {
    toast.error("Please enter legit username", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });}
 
  
  else if (form.profilepic.length<20 || form.coverpic.length<20) {
    toast.error("Please enter correct profile picture and cover picture details", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });}
  else if (form.id.length<1 && form.secret.length<1) {
    toast.error("Please enter Razorpay Id and Secret", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });
    
   }
 else if ( form.id.length<7) {
 toast.error("Please enter a valid Razorpay Id", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce})
  }
 else if ( form.secret.length<7) {
 toast.error("Please enter a valid Razorpay Secret", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce})
  }
  else{
  let u=await updateprofile(name,session.user.name,form)

  if (u.error) {
  toast.error(u.error, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce
  })}
else{
  toast.success("Profile Updated", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce
  });
  await update({ name: form.username })
  setTimeout(() => {
    
     router.push(`/${form.username}`)
  }, 1000);
          
   }} }
   
  return (
    <div className='text-white flex flex-col  items-center py-7 px-6 '>
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
    <h1 className='text-3xl text-center font-bold px-5 pb-10'>Welcome to your Dashboard</h1>

    <form className=' w-[80%] xl:w-[50%] flex flex-col gap-2' action={submit}>
      <label htmlFor="name" className=' font-medium mx-1 text-lg '>Name</label>
      <input type="text" id='name' onChange={(e)=>change(e)} name="name" value={form.name}  className='w-full bg-slate-700 rounded-xl p-2'  />

      <label htmlFor="email" className=' font-medium mx-1 text-lg '>Email</label>
      <input type="text"  id='email' readOnly={true}  name='email' value={form.email}  className='w-full placeholder:text-white bg-slate-700 rounded-xl p-2'  />

      <label htmlFor="username" className=' font-medium mx-1 text-lg '>Username</label>
      <input type="text" id='username'  onChange={(e)=>change(e)} name='username' value={form.username?form.username:""} className='w-full bg-slate-700 rounded-xl p-2'  />

      <label htmlFor="profile" className=' font-medium mx-1 text-lg '>Profile Picture</label>
      <input type="text" onChange={(e)=>change(e)} name='profilepic' value={form.profilepic?form.profilepic:""} id='profile' className='w-full bg-slate-700 rounded-xl p-2'  />

      <label htmlFor="cov"  className=' font-medium mx-1 text-lg'>Cover Picture</label>
      <input type="text" onChange={(e)=>change(e)} name='coverpic' value={form.coverpic?form.coverpic:""} id='cov' className='w-full bg-slate-700 rounded-xl p-2'  />

      <label htmlFor="id" className=' font-medium mx-1 text-lg '>Razorpay Id</label>
      <input type="text" id='id' onChange={(e)=>change(e)} name='id'  value={form.id?form.id:""} className='w-full bg-slate-700 rounded-xl p-2'  />

      <label htmlFor="secret" className=' font-medium mx-1 text-lg '>Razorpay Secret</label>
      <input type="text" onChange={(e)=>change(e)} id='secret' name='secret' value={form.secret?form.secret:""} className='w-full bg-slate-700 rounded-xl p-2'  />
      
<button type='submit'  className="text-white bg-gradient-to-br from-black  to-slate-700 hover:bg-gradient-to-bl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg  text-lg px-5 py-2 justify-center my-2   inline-flex items-center dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-slate-800 w-full" >Save</button>



    </form>
  </div>
  
  )
}

export default Dashboard

