import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
const Card = ({ amount , img , checkout}) => {
     return (
       <div className=" mt-[5rem] mr-16 ">
         <div className=" max-w-[16rem] min-h-28 max-h-30 overflow-hidden min-w-[14rem] flex flex-col items-center justify-center gap-5">
           <img
             src={img}
             className="h-full rounded-xl w-full object-contain"
             alt=""
           />
           <h1 className=" flex gap-1 items-center">
             Price : <FaIndianRupeeSign /> {amount}
           </h1>
           <button
             onClick={() => checkout(amount, img)}
             className="py-2 px-6 bg-gray-100 hover:bg-red-300 transition-all duration-700 ease-in-out hover:text-white rounded-xl"
           >
             Buy Now
           </button>
         </div>
       </div>
     );
};

export default Card
