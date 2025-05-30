import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 text-white p-6 flex justify-center font-medium items-center'>
      <p>Copyright &copy; {currentYear} | Buy me a Drink - All rights reserved</p>
    </footer>
  )
}

export default Footer
