import React from 'react'
import CartCount from './utils/Cart/CartCount'
import CartEmpty from "./utils/Cart/CartEmpty";
import Cartitem from "./utils/Cart/CartItem";
const Cart = () => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 opacity-100 visible translate-x-0"`}
        >
          <CartCount />
          <CartEmpty />
          <Cartitem />
        </div>
      </div>
    </>
  );
}

export default Cart