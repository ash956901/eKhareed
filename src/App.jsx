import NavBar from "./components/Navbar"
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return(
    <>
      <div className="bg-slate-900">
        <NavBar/>
      </div>

      <Routes>
        <Route path="/eKhareed" element={<Home/>}/>
        <Route path="/eKhareed/cart" element={<Cart/>}/>
      </Routes>

    </>
  ) ;
};

export default App;
