import { Link } from "react-router-dom"


const NavBar = ()=>{
    return(
        <>
        <div className='bg-blue-500 shadow text-white font-bold flex justify-between items-center p-4 w-full'>
            <div className='mx-15'>LOGO</div>
            <div className='mx-15 flex gap-15'>
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/hooksprocess">HooksProcess</Link>
             </div>   
        </div>
        </>
    )
}
export default NavBar