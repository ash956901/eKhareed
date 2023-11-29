import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]);

  return (
    <div className="flex mb-2  flex-row  max-w-6xl mx-auto  ">
      {
        cart.length>0?
        (
        <div className="flex flex-col sm:gap-8 md:flex-row w-full ">
          <div className=" flex flex-col  gap-y-2">
            {
              cart.map((item,index)=>(
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))
            }
          </div>


          <div className="flex flex-col  md:w-[35%] items-center px-8 md:px-0 justify-between">

            <div className="w-full mt-16 ">
              <div className="uppercase text-lg font-bold text-green-700">Your Cart</div>
              <div className="uppercase text-4xl mt-[-4px] font-bold text-green-700">Summary</div>
              <p className="mt-6">
                <span className="font-semibold text-gray-600 text-lg ">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="mt-4 w-full">
              <p className="font-semibold mb-3 text-lg  text-gray-600 ">Total Amount: <span className="font-semibold text-black">${totalAmount}</span></p>
              <button className="text-white  w-full hover:bg-green-600 transition-all duration-300 ease-in font-semibold py-3 rounded-lg bg-green-700">
                Checkout Now
              </button>
            </div>


          </div>
        </div>
          ):
        (
        <div className="flex flex-col items-center justify-center h-[80vh]  w-full">
          <h1 className="text-green-600 font-bold uppercase text-lg">Your cart is Empty</h1>
          
        <Link to={"/eKhareed"}>
          <button className="text-white hover:bg-green-600 transition-all duration-300 ease-in font-semibold py-3 rounded-lg w-[420px]  bg-green-700">
              Shop Now
          </button>
        </Link>
        </div>
        )
      }
    </div>
  );
};

export default Cart;
