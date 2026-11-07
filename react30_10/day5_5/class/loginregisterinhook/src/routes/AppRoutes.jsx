import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AuthLayout from "../layout/AuthLayout"

const AppRoutes = ()=>{
    return(
        <>
          
        <Routes>
             
            <Route element={<AuthLayout/>}>
               <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/contact" element={<Contact />}/>
            </Route>

            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
      
        </>
    )
}
export default AppRoutes

//for this it show navbar to home,about,contact