import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity:0,
};
const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    //cart open
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    // cart close
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    // addto cart
    setAddCartItems: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`another ${action.payload.title} added`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} add to the Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    //remove to cart
    setRemoveItemsFromCart: (state, action) => {
      const Afterremoveitems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(Afterremoveitems);
      state.cartItems = Afterremoveitems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} Remove Frome Cart`);
    },
    //increase quantity in cart
    setIncreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity++;
        toast.success(`${action.payload.title} increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    //decreased quantity in cart
    setDecreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (action.payload.cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity--;
        toast.success(`${action.payload.title} decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // clear all cart items
    setClearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`Sad :(  your Cart is empty now 🥹 `);
    },
    // calculate the total
      setheSubtotal:(state,action)=>{
        let {totalAmount,totalQuantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
          const {price , cartQuantity}= cartItem;
          const totalprice = price * cartQuantity;
           cartTotal.totalAmount+= totalprice;
           cartTotal.totalQuantity+=cartQuantity;
           return cartTotal;  


        },{
           totalAmount:0,totalQuantity:0,
        });
        state.cartTotalAmount = totalAmount;
        state.cartTotalQuantity = totalQuantity;
      }
  },
});
export const {
  setOpenCart,
  setCloseCart,
  setAddCartItems,
  setRemoveItemsFromCart,
  setIncreaseQuantity,
  setDecreaseQuantity,
  setClearCart,
  setheSubtotal,
} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartIems = (state) => state.cart.cartItems;
export const selectTotalAmount=(state)=> state.cart.cartTotalAmount;
export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
