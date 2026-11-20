import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  <>
  <div className="bg-purple-500 p-3 shadow text-white font-semibold font-sans flex justify-start items-center gap-15">
    <div className="mx-10">LOGO</div>
    <div className="flex gap-15">
    <Link to="/">ArrayProcess</Link>
    <Link to="/obj">ObjectProcess</Link>
    <Link to="/arrayofobjectrender">ArrayOfObjectRender</Link>
    </div>
  </div>
  </>
  )
}

export default NavBar