import React from 'react'
import Link from 'next/link'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 text-white p-6 flex justify-center gap-2 flex-col font-medium items-center text-center'>
       <Link href="/privacy" className=" hover:underline">
          Privacy Policy
        </Link>
      <p>Copyright &copy; {currentYear} | Buy me a Drink - All rights reserved</p>
    </footer>
  )
}

export default Footer
