import { createSlice } from "@reduxjs/toolkit";
 import { toast } from "react-hot-toast";
const initialState={
    cartState:false,
    cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]
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
         const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id);
          if(itemIndex>=0)
          {
            state.cartItems[itemIndex].cartQuantity+=1;
              toast.success(`another ${action.payload.title} added`);
          }
          else{
            const temp={...action.payload,cartQuantity:1}
          state.cartItems.push(temp);
        toast.success(`${action.payload.title} add to the Cart`);
          }
           localStorage.setItem("cart",JSON.stringify(state.cartItems));
       
    }
} 
 });
 export const { setOpenCart, setCloseCart, setAddCartItems } = CartSlice.actions;
 export const selectCartState=(state)=>state.cart.cartState
  export default CartSlice.reducer;