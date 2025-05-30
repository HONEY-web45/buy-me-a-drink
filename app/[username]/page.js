

import Paymentpage from '@/components/Paymentpage'
import React from 'react'
import { notFound } from 'next/navigation'
import User from '@/models/User'
export default async function Page({ params }) {
  const username = (await params).username
  let user=await User.findOne({username:username})
    if(!user){
        notFound()
    }
    return (
    <div className='  ' >
     <Paymentpage user_name={username}/>

      
    </div>)
  }



  export  async function generateMetadata( {params} ) {
    const username = (await params).username

    return{
      title: `${username} - Buy Me A Drink`,
      description: `This is ${username} Page `,
      }
  
        
      
    }

  