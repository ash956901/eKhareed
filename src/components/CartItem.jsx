import toast from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";

const CartItem = ({item,itemIndex}) => {
  
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div className="pt-4 px-10 border-b-4">
      <div className="flex h-[280px] flex-row gap-10">


      <div >
        <img  className="w-[170px]" src={item.image}/>
      </div>

      <div className="w-[350px] mb-[200px]">
        <h1 className="text-gray-700 font-semibold text-lg sm:text-xl text-left ">
          <span className="hidden sm:block">{item.title}</span>
          <span className="sm:hidden">{item.title.split(" ").slice(0,7).join(" ")}</span>
        </h1>
        <h1 className="mt-4 font-normal text-sm sm:text-md text-left ">

          <span className="sm:block">{item.description.split(" ").slice(0,10).join(" ")+"..."}</span>
          <span className="hidden sm:visible">{item.description.split(" ").slice(0,15).join(" ")+"..."}</span>
        </h1>
        <div className="flex mt-5 flex-row justify-between items-center">
          <p className="text-green-600 text-md font-semibold">${item.price}</p>
          <div className="bg-red-500 w-6 px-4 py-2 rounded-full relative flex-col flex items-center justify-center cursor-pointer 
          hover:bg-red-300 transition-all duration-300 ease-in" onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>
      </div>





      </div>







    </div>
  );
};

export default CartItem;
