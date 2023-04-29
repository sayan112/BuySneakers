import React, { useEffect, useState } from 'react'
import {HeartIcon,MagnifyingGlassIcon,ShoppingBagIcon} from "@heroicons/react/24/outline"
 import logo from "../assets/logo.png"
  import { useDispatch, useSelector } from 'react-redux'
import {selectTotalQuantity, setOpenCart } from '../app/CartSlice.js'
const Navbar = () => {
    const totalQuantity = useSelector(selectTotalQuantity);

   const [ navstate, setNavstate]= useState(false);
const dispatch= useDispatch();
    const onCartToggle=()=>{
      dispatch(setOpenCart(
        {
          cartState:true
        }
      ))
    }
    const onNavScroll=()=>{
      if(window.scrollY>30)
      {
        setNavstate(true);
      }
      else{
          setNavstate(false);
      }
    }
     useEffect(()=>{
      window.addEventListener("scroll",onNavScroll);
       return()=>{
        window.removeEventListener("scroll",onNavScroll)
       }
     },[]);

  return (
    <>
      <header
        className={
          !navstate
            ? `absolute top-7 left-0 right-0 opacity-100 z-50`
            : `fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme`
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div>
            <img
              src={logo}
              className={`w-16 h-auto ${navstate && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navstate && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navstate && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                onClick={onCartToggle}
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navstate && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-1 bg-white text-slate-900 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}
                >
                  {totalQuantity}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar