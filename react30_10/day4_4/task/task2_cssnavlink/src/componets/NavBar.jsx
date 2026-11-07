import { NavLink } from "react-router-dom"

const NavBar =()=>{
    return(
        <>
        <div className="bg-white-300 text-black shadow flex justify-between text-center p-3 ">
            <div className="mx-10">LOGO</div>
            <div className="mx-10 flex gap-6">
                <NavLink className={({isActive})=>isActive?"bg-amber-300 p-1 text-center w-22":"bg-white p-1 text-center w-22"} to='/'>DashBoard</NavLink>
                 <NavLink className={({isActive})=>isActive?"bg-amber-300 p-1 text-center w-22":"bg-white p-1 text-center w-22"}  to='/courses'>Courses</NavLink>
                  <NavLink className={({isActive})=>isActive?"bg-amber-300 p-1 text-center w-22":"bg-white p-1 text-center w-22"}  to='/assignment'>Assignment</NavLink>
                   <NavLink className={({isActive})=>isActive?"bg-amber-300 p-1 text-center w-22":"bg-white p-1 text-center w-22"}  to='/profile'>Profile</NavLink>
            </div>
        </div>
        
        </>
    )
}
export default NavBar