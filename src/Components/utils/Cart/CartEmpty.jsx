import React from 'react'
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
const CartEmpty = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7 ">
        <img
          src="https://www.linkpicture.com/q/empty-bag.webp"
          alt="empty-bag"
          className="w-40  lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          type="button"
          className="button-theme max-w-md bg-[#ff527b] shadow flex items-center justify-center py-2 gap-2 text-slate-900"
        >
          <ArrowLeftIcon className="w-5 h-5 text-white " />
          <span className="text-white">
            Back to Store
          </span>
        </button>
      </div>
    </>
  );
}

export default CartEmpty