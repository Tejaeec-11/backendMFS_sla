import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
  return (
    <>
    
    <NavBar/>
    <Outlet/>
    </>
  )
};

export default AuthLayout;

// <Outlet/> it is used to hide navbar from login and register page