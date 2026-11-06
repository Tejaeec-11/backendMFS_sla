import Link from "../Utils/Link"
import Logo from "../Utils/Logo"

const NavBar =()=>{
    return (
    <>
    <div className=" shadow  fixed top-0 w-screen p-2 font-sans flex justify-between items-center">
      <div>
        <Logo/>
        </div>
        <div className="flex gap-15 mx-15">
        <Link/>
        </div>  
    </div>
    </>)
}
export default NavBar

//<Logo/> after write this click crtl + space it show suggest
//(shadow-2xl,shadow-sm-2xl,shadow-2xs) need add (border-0) with all 3
//<div className="bg-amber-200 shadow-2xl border p-2 flex justify-between items-center">



//try line 7***********************************
// <div className=" shadow bg-white fixed top-0 w-screen p-2 font-sans flex justify-between items-center">