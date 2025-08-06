import React from 'react'
import Link from 'next/link'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white p-6 flex justify-center gap-2 flex-col font-medium items-center text-center'>
      <div className='flex flex-col sm:flex-row gap-2 font-bold'>
        <Link href="/term" className=" hover:underline">
          Terms & Conditions
        </Link>
       <Link href="/privacy" className=" hover:underline">
          Privacy Policy
        </Link>
        <Link href="/refund" className=" hover:underline">
          Refund Policy
          </Link>
        </div>
      <p>Copyright &copy; {currentYear} | Buy me a Drink - All rights reserved</p>
    </footer>
  )
}

export default Footer
