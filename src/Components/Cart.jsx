import React from 'react'
import CartCount from './utils/Cart/CartCount'
import CartEmpty from "./utils/Cart/CartEmpty";
import Cartitem from "./utils/Cart/CartItem";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartState, setCloseCart } from '../app/CartSlice.js';
const Cart = () => {
   const dispatch = useDispatch();
    const ifCartState=useSelector(selectCartState);
     console.log(ifCartState);
     const onCartToggle = () => {
       dispatch(
         setCloseCart({
           cartState: false
         })
       );
     };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
           <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}
        >
          <CartCount onCartToggle={onCartToggle} />
          <CartEmpty />
          <Cartitem />
        </div>
      </div>
    </>
  );
}

export default Cart