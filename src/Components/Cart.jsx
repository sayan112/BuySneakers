import React, { useEffect } from "react";
import CartCount from "./utils/Cart/CartCount";
import CartEmpty from "./utils/Cart/CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartIems,
  selectCartState,
  setCloseCart,
  setClearCart,
  setheSubtotal,
  selectTotalAmount,
  selectTotalQuantity,
} from "../app/CartSlice.js";
import CartItem from "./utils/Cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartIems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQuantity = useSelector(selectTotalQuantity);
  useEffect(() => {
    dispatch(setheSubtotal());
  }, [cartItems, dispatch]);

  // cart open state
  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  // clear all cart items
  const onClearCart = () => {
    dispatch(setClearCart());
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
          <CartCount
            onCartToggle={onCartToggle}
            onClearCart={onClearCart}
            totalQuantity={totalQuantity}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {cartItems.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold">SubTotal</h1>
                  <h1
                    className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5
             "
                  >
                    {totalAmount}$
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping will Calculated At Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white
            "
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
