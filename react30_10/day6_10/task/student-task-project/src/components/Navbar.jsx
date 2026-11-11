
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="flex flex-wrap gap-6 justify-center">
        <Link to="/">Student</Link>
        <Link to="/employee">Employee</Link>
        <Link to="/product">Product</Link>
        <Link to="/students">Student List</Link>
        <Link to="/course">Course</Link>
      </div>
    </nav>
  );
}

export default Navbar;
