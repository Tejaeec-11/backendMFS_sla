
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProtectRoute from "./ProtectRoute";
import DashBoard from "../pages/DashBoard";
import RegisterPage from "../pages/RegisterPage";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<ProtectRoute><DashBoard/></ProtectRoute>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

