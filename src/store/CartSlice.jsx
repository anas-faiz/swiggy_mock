import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: cart;
    initialState: {
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push();
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0;
        },
    }

})

export {addItem,removeItem,clearCart} = CartSlice.actions;

export default CartSlice.reducer