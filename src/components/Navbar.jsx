import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";
import logo from "../logo_ashu.png";
const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div>
      <nav className=" flex items-center h-20 max-w-6xl mx-auto justify-between ">
        <NavLink to="/eKhareed">
          <div className="ml-5">
            <img className="h-14" src={logo} />
          </div>
        </NavLink>


        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
          <NavLink to="/eKhareed">
            <p>Home</p>
          </NavLink>
          <NavLink to="/eKhareed/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl"/>
              {
                cart.length>0 && 
                <span
                className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center 
                items-center animate-bounce rounded-full text-white"
                >{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
