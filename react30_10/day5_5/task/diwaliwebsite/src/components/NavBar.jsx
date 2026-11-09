import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-red-950 text-yellow-400 w-60 min-h-screen p-6 shrink-0">

            <h1 className="text-3xl font-bold mb-10">
                Diwali
            </h1>

            <div className="flex flex-col gap-4">

                <NavLink to="/" className="p-3 rounded-lg hover:bg-red-800">
                    Home
                </NavLink>

                <NavLink to="/about" className="p-3 rounded-lg hover:bg-red-800">
                    About
                </NavLink>

                <NavLink to="/celebrations" className="p-3 rounded-lg hover:bg-red-800">
                    Celebrations
                </NavLink>

                <NavLink to="/gallery" className="p-3 rounded-lg hover:bg-red-800">
                    Gallery
                </NavLink>

                <NavLink to="/contact" className="p-3 rounded-lg hover:bg-red-800">
                    Contact
                </NavLink>

            </div>
        </nav>
    )
}

export default Navbar