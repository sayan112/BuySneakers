import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartState:false,
    cartItems:[],
}
 const CartSlice = createSlice({
   initialState,
   name:"cart",
   reducers:{
    setOpenCart:(state,action)=>{
state.cartState=action.payload.cartState;
    },
    setCloseCart:(state,action)=>{
state.cartState = action.payload.cartState;
   },
    setAddCartItems:(state,action)=>{
         state.cartItems.push(action.payload);
    }
} 
 });
 export const { setOpenCart, setCloseCart, setAddCartItems } = CartSlice.actions;
 export const selectCartState=(state)=>state.cart.cartState
  export default CartSlice.reducer;