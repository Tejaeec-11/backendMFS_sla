
import { Routes, Route } from "react-router-dom";

import StudentProfile from "../pages/StudentProfile";
import Employee from "../pages/Employee";
import Product from "../pages/Product";
import StudentList from "../pages/StudentList";
import CourseDetails from "../pages/CourseDetails";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<StudentProfile />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/product" element={<Product />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/course" element={<CourseDetails />} />
    </Routes>
  );
}

export default AppRouter;
