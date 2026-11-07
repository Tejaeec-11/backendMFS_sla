import { Link } from "react-router-dom"

const NavBar =()=>{
    return(
        <>

      <div className="flex shadow justify-between items-center p-4 fixed top-0 w-full bg-green-100 z-10">
        <div className="mx-15">LOGO</div>
         <div className="mx-15 flex gap-10">
        <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
       </div>
      </div>
        </>
    )
}
export default NavBar

//w-screen vida w-full better 