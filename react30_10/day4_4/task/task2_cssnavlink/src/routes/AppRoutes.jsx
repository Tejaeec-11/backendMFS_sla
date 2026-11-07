import { Route, Routes } from "react-router-dom"
import DashBoard from "../pages/Dashboard"
import Courses from "../pages/Courses"
import Assignment from "../pages/Assignment"
import Profile from "../pages/Profile"

const AppRoutes =()=>{
    return(
        <>
        <div>
        <Routes>
            <Route path="/" element={<DashBoard />}/>
            <Route path="/courses" element={<Courses />}/>
            <Route path="/assignment" element={<Assignment />}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </div>
        </>
    )
}
export default AppRoutes