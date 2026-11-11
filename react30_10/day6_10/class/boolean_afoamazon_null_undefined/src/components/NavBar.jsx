
import { Link } from "react-router-dom"
import { CgBrowse, CgBrowser, CgCast, CgChevronDoubleRightR, CgCopy } from "react-icons/cg"

const NavBar = () => {
  return (
    <>
      <div className="bg-white text-black shadow flex justify-between items-center p-4.5">
        <div className="mx-15">LOGO</div>

        <div className="mx-15 flex items-center gap-15">
          <Link to={"/"} className="flex items-center gap-1"><CgCopy />Product</Link>
          <Link to={"/boolean"} className="flex items-center gap-1"><CgChevronDoubleRightR />BooleanRendering</Link>
          <Link to={"/array"} className="flex items-center gap-1"><CgCast />ArrayRendering</Link>
          <Link to={"/afo"} className="flex items-center gap-1"><CgBrowser />ArrayOfObjectRendering</Link>
          <Link to={"/object"} className="flex items-center gap-1"><CgBrowse />ObjectRendering</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
