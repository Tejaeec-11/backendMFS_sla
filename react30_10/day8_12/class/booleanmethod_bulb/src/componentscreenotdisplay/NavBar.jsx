import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (<>
    <div className='bg-cyan-950 text-white flex justify-between items-center p-3 ' >
       <div className='mx-15'>LOGO</div>
       <div className='mx-15 flex gap-15 '>
         <Link to='/'>Boolean</Link>
        <Link to='/nullishpage'>Nullish</Link>
        <Link to='/arraypage'>Array</Link>
       </div>
    </div>
</>  )
}

export default NavBar