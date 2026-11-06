import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () =>{
  return(
   <>
    <div className="flex shadow justify-between items-center p-4  w-screen">
    <div className="mx-15">LOGO</div>
    <div className="mx-15 flex gap-15">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/services'>Services</Link>
    </div>
   </div>
    </>
  )
}
export default NavBar


//try 1
// <div className="flex shadow justify-between top-0 items-center bg-white p-4 fixed  w-screen">

//try 2 nav = nav link  (colour appear) not **
 {/*  <>
    <div className="flex shadow justify-between items-center p-4  w-screen">
    <div className="mx-15">LOGO</div>
    <div className="mx-15 flex gap-15">
      <NavLink className={({isActive})=>isActive&&"bg-amber-300 p-1 text-center w-20"} to='/'>Home</NavLink>
      <NavLink className={({isActive})=>isActive&&"bg-amber-300 p-1 text-center w-20"} to='/about'>About</NavLink>
      <NavLink className={({isActive})=>isActive&&"bg-amber-300 p-1 text-center w-20"} to='/contact'>Contact</NavLink>
      <NavLink className={({isActive})=>isActive&&"bg-amber-300 p-1 text-center w-20"} to='/services'>Services</NavLink>
    </div>
   </div>
    </>*/}

    //? , &&
    // <NavLink className={({isActive})=>isActive?"bg-amber-300 p-1 text-center w-30":"bg-white p-1 text-center w-30"} to='/'>Home</NavLink>