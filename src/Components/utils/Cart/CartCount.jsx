import React from 'react'
import {ChevronDoubleLeftIcon, XMarkIcon} from "@heroicons/react/24/solid";
const CartCount = ({onCartToggle}) => {
  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3">
          <div
            className="grid items-center cursor-pointer"
            onClick={onCartToggle}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5 text-[#ff527b] hover:text-orange-500 storke-[2]" />
          </div>
          <div className="grid items-center ">
            <h1 className="text-base font-medium text-[#846c73] mr-2">
              Your Cart
              <span className="bg-gradient-to-b from-[#85787c] to-[#9da0a7] shadow-sm shadow-gray-500 rounded px-1 py-0.5 text-white font-normal text-xs ml-1">
                (items)
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button type="button" className=" rounded  active:scale-90 p-0.5">
            <XMarkIcon
              className="w-5 h-5 text-white rounded-sm bg-[#ff527b]"
              onClick={onCartToggle}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default CartCount