import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setPosts(data);
    }
    catch(error){
      setPosts([]);
      window.alert("Error in Fetching Data");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);

  return (
    <div className="w-full h-full ">
      {
        loading?
        <div className="flex items-center h-[80vh] justify-center">
           <Spinner/>
        </div>
       :
        posts.length>0?
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">{
          posts.map((post)=>(
          <Product key={post.id} post={post}/>
        ))} </div>):
        <div className="flex justify-center h-[80vh] text-green-700 font-bold  text-xl items-center">
          <p>
            No Data Found
          </p>
        </div>
      }
    </div>

  );
};

export default Home;
