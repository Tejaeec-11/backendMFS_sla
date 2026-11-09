import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/NavBar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Celebrations from "./pages/Celebrations"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"


const App = () => {

    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className="flex min-h-screen">

            <div className={`shrink-0 overflow-hidden transition-all duration-300 ${
    showMenu ? "w-60" : "w-0"
}`}>
    <Navbar />
 </div> {/* for this bug we use {showMenu && <Navbar />} this but this not smooth beginner level */}

            <div className="flex-1">

                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-3xl text-red-950 p-4"
                >
                    ☰
                </button>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/celebrations" element={<Celebrations />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer />

            </div>

        </div>
    )
}

export default App