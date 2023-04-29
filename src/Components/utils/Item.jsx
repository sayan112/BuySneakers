import React from 'react';
 import { useDispatch } from 'react-redux';
 import {StarIcon,ShoppingBagIcon} from "@heroicons/react/24/solid"
import { setAddCartItems, setOpenCart } from '../../app/CartSlice';

 const Item = ({
  ifexists, item: { id, color, shadow, title, text, img, btn, rating, price },
  
 }) => {
  const dispatch = useDispatch();
   const onAddtoCart=()=>{
   
    const item = { id, color, shadow, title, text, img, btn, rating, price };
     dispatch(setAddCartItems(item));    
   }

    // cart open state
     const onCartToggle = () => {
       dispatch(
         setOpenCart({
           cartState: true,
         })
       );
     };

   return (
     <>
       <div
         className={`relative bg-gradient-to-b ${color}${shadow} grid items-center  rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 ${
           ifexists ? "justify-items-start" : "justify-items-center"
         }`}
       >
         <div
           className={`grid items-center ${
             ifexists ? "justify-items-start" : "justify-items-center"
           }`}
         >
           <h1 className="text-slate-200 font-medium filter drop-shadow text-xl lg:text-lg sm:text-sm md:text-base">
             {title}
           </h1>
           <p className="text-slate-200 font-normal filter drop-shadow text-base md:text-sm">
             {text}
           </p>
           <div className="flex items-center justify-between w-28 my-2">
             <div className="flex items-center bg-white/80 px-1 rounded  blur-effect-theme ">
               <h1 className="text-black text-sm font-medium ">{price}</h1>
             </div>
             <div className="flex items-center gap-1">
               <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
               <h1 className="md:text-sm font-normal text-slate-100">
                 {rating}
               </h1>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <button
               type="button"
               className="bg-white/90
             blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
               onClick={onAddtoCart}
             >
               <ShoppingBagIcon className="icon-style text-slate-900" />
             </button>
             <button
               type="button"
               className="bg-white/90
             blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
               onClick={()=>{onAddtoCart();onCartToggle();}}
             >
               {btn}
             </button>
           </div>
         </div>
         <div
           className={`flex items-center ${
             ifexists ? "absolute top-5 right-1" : "justify-items-center"
           }`}
         >
           <img
             src={img}
             alt={`img/alt/imgid/${id}`}
             className={` transitions-theme hover:-rotate-12 ${
               ifexists
                 ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                 : "h-36 w-64"
             }`}
           />
         </div>
       </div>
     </>
   );
 };

export default Item;