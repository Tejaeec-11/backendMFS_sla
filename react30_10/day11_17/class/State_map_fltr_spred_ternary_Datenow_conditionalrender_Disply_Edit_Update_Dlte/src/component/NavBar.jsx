import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  <>
  <div className='bg-gray-600 flex justify-start gap-230 p-4 '>
    <div className='bg-blue-500 text-black font-extrabold p-1 rounded mx-10 '>LOGO</div>
    <div className='bg-red-500 text-white  p-1 rounded mx-10 '>
        <Link to="/">Register Form</Link>
    </div>
  </div>
  </>
  )
}

export default NavBar