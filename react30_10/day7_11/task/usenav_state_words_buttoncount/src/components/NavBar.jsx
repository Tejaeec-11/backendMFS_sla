
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="bg-black text-white p-3 flex justify-between items-center">

        <div className="font-bold">LOGO</div>

        <div className="flex gap-5">
          <Link to="/">Products</Link>
          <Link to="/hooks">Hooks Process</Link>
          <Link to="/rendering">Rendering</Link>
        </div>

      </div>
    </>
  )
}

export default NavBar




//taskused = Product listing using map()
// [x] useNavigate() to navigate to single product
// [x] useParams() to get product ID
// [x] Increment using useState()
// [x] Decrement using useState()
// [x] Reset using useState()
// [x] Change React word to Node using useState()