"use client"
import React from 'react'
import Lenis from 'lenis'
import { useEffect } from 'react'
const Leniss = ({children}) => {
    useEffect(() => {
        let lenis= new Lenis({
            lerp:0.1
        })
      
function raf (time){
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
    }, [])
    

  return (
    <div>
      {children}
    </div>
  )
}

export default Leniss
